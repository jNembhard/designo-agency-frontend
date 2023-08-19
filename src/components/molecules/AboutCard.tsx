import { GET_ABOUT } from "../../graphql/aboutQueries";
import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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

type AboutCardProp = {
  aboutID: string;
  isdark: boolean;
};

const AboutCard = ({ aboutID, isdark }: AboutCardProp) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");

  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: { AboutID: aboutID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;

  const { description, images, title } = data.about;

  return (
    <Box
      sx={{
        margin: { tablet: "0 2.5rem 7.5rem", laptop: "0 auto 7.5rem" },
        width: { laptop: "95vw", desktop: "unset" },
        maxWidth: { laptop: "69.438rem" },
        borderRadius: { tablet: "0.938rem" },
        overflow: { tablet: "hidden" },
      }}
    >
      <StyledCard isdark={isdark} aboutid={aboutID}>
        <CardMedia
          sx={{
            minWidth: { laptop: "29.75rem" },
            height: {
              mobile: "20rem",
              laptop: aboutID === "about-1" ? "30rem" : "40rem",
            },
          }}
          image={
            isBreakpoint1024
              ? process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.desktop
              : isBreakpoint767
              ? process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.tablet
              : process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile
          }
          title={title}
        />
        <CardContent
          sx={{
            position: "relative",
            textAlign: { mobile: "center", tablet: "left" },
            overflow: { mobile: "hidden", laptop: "unset" },
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
          }}
        >
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
                sx={{
                  position: "absolute",
                  top: {
                    mobile: "-8.438rem",
                    tablet: "-28rem",
                    laptop: "-15rem",
                  },
                  right: { mobile: "0", tablet: "8.4rem", laptop: "5rem" },
                  zIndex: "-1",
                }}
                src={
                  process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                  images.heroPatternMobile
                }
                alt=""
              />
            </Box>
          )}
          <Typography
            variant={isdark ? "h1" : "h2"}
            sx={{
              color: isdark ? "white.main" : "peach.main",
              mb: {
                mobile: "1.5rem",
              },
            }}
          >
            {title}
          </Typography>
          {description.split("\n").map((text: string, index: string) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                mb: "1.25rem",
                color: isdark ? "white.main" : "black.main",
              }}
            >
              {text}
            </Typography>
          ))}
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default AboutCard;
