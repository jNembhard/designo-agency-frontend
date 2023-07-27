import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "./graphql/Queries";

export const About = (about: { aboutID: string }) => {
  const { loading, error, data } = useQuery(GET_ABOUT, {
    variables: { AboutID: about.aboutID },
  });
  console.log(about);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { description, images, title } = data.getAbout;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={images.heroPatternDesktop} alt="" />
      <img src={images.heroPatternMobile} alt="" />
      <img src={images.mobile} alt="" />
      <img src={images.tablet} alt="" />
    </div>
  );
};
