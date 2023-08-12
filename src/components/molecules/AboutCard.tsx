import { GET_ABOUT } from "../../graphql/aboutQueries";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({ isdark }: { isdark: boolean }) => ({
  boxShadow: "none",
  color: isdark ? "#ffffff" : "#e7816b",
  backgroundColor: isdark ? "#e7816b" : "#fdf3f0",
}));

const AboutCard = ({
  aboutID,
  isdark,
}: {
  aboutID: string;
  isdark: boolean;
}) => {
  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: { AboutID: aboutID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;

  const { description, images, title } = data.about;
  return (
    <Box>
      <StyledCard isdark={isdark}>
        <CardMedia
          sx={{ height: 320 }}
          image={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile}
          title={title}
        />
        <CardContent
          sx={{
            position: "relative",
            textAlign: "center",
            overflow: "hidden",
            zIndex: "1",
            padding: {
              mobile: "5rem 1.5rem 0",
            },
            mb: {
              mobile: "5rem",
            },
          }}
        >
          {images.heroPatternDesktop && images.heroPatternMobile && (
            <Box component="picture">
              <source
                media="(min-width: 768px)"
                srcSet={
                  process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                  images.heroPatternDesktop
                }
              />
              <Box
                component="img"
                sx={{
                  position: "absolute",
                  top: "-8.438rem",
                  right: "0",
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
