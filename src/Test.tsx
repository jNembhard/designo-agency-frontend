import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "./graphql/aboutQueries";
import Typography from "@mui/material/Typography";

export const Test = (about: { aboutID: string }) => {
  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: { AboutID: about.aboutID },
  });
  console.log(about);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { description, images, title } = data.about;

  return (
    <div>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" color="black.dark">
        {description}
      </Typography>
      <img src={images.heroPatternDesktop} alt="" />
      <img src={images.heroPatternMobile} alt="" />
      <img src={images.mobile} alt="" />
      <img src={images.tablet} alt="" />
    </div>
  );
};
