import React from "react";
import { GET_ABOUT } from "../../graphql/aboutQueries";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const StyledAboutCard = styled(Card)(({ isdark }: { isdark: boolean }) => ({
  boxShadow: "none",
  color: isdark ? "#ffffff" : "#e7816b",
  backgroundColor: isdark ? "#e7816b" : "#fdf3f0",
}));

const TypographyHeader = styled(Typography)(
  ({ isdark }: { isdark: boolean }) => ({
    color: isdark ? "#ffffff" : "#e7816b",
  })
);

const TypographyText = styled(Typography)(
  ({ isdark }: { isdark: boolean }) => ({
    color: isdark ? "#ffffff" : "#333136",
  })
);

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
      <StyledAboutCard isdark={isdark}>
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
          <TypographyHeader
            isdark={isdark}
            variant="h2"
            sx={{
              fontSize: {
                mobile: "2rem",
              },
              lineHeight: {
                mobile: "2.25rem",
              },
              mb: {
                mobile: "1.5rem",
              },
            }}
          >
            {title}
          </TypographyHeader>
          {description.split("\n").map((text: string, index: string) => (
            <TypographyText
              key={index}
              isdark={isdark}
              variant="body1"
              sx={{
                fontSize: "0.938rem",
                lineHeight: "1.563rem",
                mb: "1.25rem",
              }}
            >
              {text}
            </TypographyText>
          ))}
        </CardContent>
      </StyledAboutCard>
    </Box>
  );
};

export default AboutCard;
