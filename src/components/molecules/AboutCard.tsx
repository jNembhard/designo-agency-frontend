import { GET_ABOUT } from "../../graphql/aboutQueries";
import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { AboutCardSkeleton } from "./skeletons/AboutCardSkeleton";

const aboutCardWrapper = {
  margin: {
    tablet: "0 2.5rem 7.5rem",
    laptop: "0 auto 7.5rem",
  },
  width: {
    laptop: "95vw",
    desktop: "unset",
  },
  maxWidth: { laptop: "69.438rem" },
  borderRadius: { tablet: "0.938rem" },
  overflow: { tablet: "hidden" },
};

const StyledCard = styled(Card)(
  ({ isdark, aboutid }: { isdark: boolean; aboutid: string }) => ({
    boxShadow: "none",
    color: isdark ? "#ffffff" : "#e7816b",
    backgroundColor: isdark ? "#e7816b" : "#fdf3f0",
    "@media (min-width: 1024px)": {
      display: "flex",
      flexDirection: aboutid === "about-2" ? "row" : "row-reverse",
      maxWidth: "69.438rem",
      alignItems: "center",
    },
  })
);

const StyledCardMedia = styled(CardMedia)(
  ({ aboutid }: { aboutid: string }) => ({
    height: "20rem",
    "@media (min-width: 1024px)": {
      minWidth: "29.75rem",
      height: aboutid === "about-1" ? "30rem" : "40rem",
    },
  })
);

const aboutCardContent = {
  position: "relative",
  textAlign: {
    mobile: "center",
    tablet: "left",
  },
  overflow: {
    mobile: "hidden",
    laptop: "unset",
  },
  zIndex: "1",
  padding: {
    mobile: "5rem 1.5rem 0",
    tablet: "4rem 3.62rem",
    laptop: "4rem 5.94rem",
  },
  mb: {
    mobile: "5rem",
    tablet: "unset",
  },
};

const aboutCardBgImage = {
  position: "absolute",
  top: {
    mobile: "-8.438rem",
    tablet: "-28rem",
    laptop: "-15rem",
  },
  right: {
    mobile: "0",
    tablet: "8.4rem",
    laptop: "5rem",
  },
  zIndex: "-1",
};

const StyledCardTitle = styled(Typography)(
  ({ isdark }: { isdark: boolean }) => ({
    color: isdark ? "white.main" : "peach.main",
    mb: {
      mobile: "1.5rem",
    },
  })
);

const StyledCardText = styled(Typography)(
  ({ isdark }: { isdark: boolean }) => ({
    mb: "1.25rem",
    color: isdark ? "white.main" : "black.main",
  })
);

const aboutCardStyles = {
  wrapper: aboutCardWrapper,
  cardContent: aboutCardContent,
  bgImage: aboutCardBgImage,
};

type AboutCardProp = {
  aboutID: string;
  isdark: boolean;
};

const AboutCard = ({ aboutID, isdark }: AboutCardProp) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
  const [isLoading, setIsLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: { AboutID: aboutID },
  });

  if (loading || isLoading) return <AboutCardSkeleton aboutid={aboutID} />;
  if (error) return <p>Error:{error.message}</p>;

  const { description, images, title } = data.about;

  return (
    <Box sx={{ ...aboutCardStyles.wrapper }}>
      {!loading && !error && (
        <StyledCard isdark={isdark} aboutid={aboutID}>
          <StyledCardMedia
            aboutid={aboutID}
            image={
              isBreakpoint1024
                ? process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.desktop
                : isBreakpoint767
                ? process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.tablet
                : process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile
            }
            title={title}
          />
          <CardContent sx={{ ...aboutCardStyles.cardContent }}>
            {images.heroPatternDesktop && images.heroPatternMobile && (
              <Box component="picture">
                <Box
                  component="source"
                  media="(min-width: 47.9375em)"
                  srcSet={
                    process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                    images.heroPatternDesktop
                  }
                />
                <Box
                  component="img"
                  sx={{ ...aboutCardStyles.bgImage }}
                  src={
                    process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                    images.heroPatternMobile
                  }
                  alt=""
                />
              </Box>
            )}
            <StyledCardTitle variant={isdark ? "h1" : "h2"} isdark={isdark}>
              {title}
            </StyledCardTitle>
            {description.split("\n").map((text: string, index: string) => (
              <StyledCardText key={index} variant="body1" isdark={isdark}>
                {text}
              </StyledCardText>
            ))}
          </CardContent>
        </StyledCard>
      )}
    </Box>
  );
};

export default AboutCard;
