import { GET_ABOUT } from "../../../graphql/aboutQueries";
import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AboutCardSkeleton } from "./AboutCardSkeleton";
import { aboutCardStyles } from "./AboutCardStyles";

const StyledCard = styled(Card)(
  ({ isdark, aboutid }: { isdark: string; aboutid: string }) => ({
    boxShadow: "none",
    color: isdark === "true" ? "#ffffff" : "#e7816b",
    backgroundColor: isdark === "true" ? "#e7816b" : "#fdf3f0",
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

const StyledCardTitle = styled(Typography)(
  ({ isdark }: { isdark: string }) => ({
    color: isdark === "true" ? "white.main" : "peach.main",
    marginBottom: "1.5rem",
  })
);

const StyledCardText = styled(Typography)(({ isdark }: { isdark: string }) => ({
  marginBottom: "1.25rem",
  color: isdark === "true" ? "#ffffff" : "#333136",
}));

type AboutCardProp = {
  aboutID: string;
  isdark: string;
  pictureloading: boolean;
};

const AboutCard = ({ aboutID, isdark, pictureloading }: AboutCardProp) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");

  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: { AboutID: aboutID },
  });

  if (loading) return <AboutCardSkeleton aboutid={aboutID} />;
  if (aboutID === "" || error)
    return <p>Error occured while fetching about query data</p>;

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
                  loading={pictureloading ? "eager" : "lazy"}
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
