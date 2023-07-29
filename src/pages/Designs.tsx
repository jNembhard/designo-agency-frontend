import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import NotFound from "./404";

const Designs = () => {
  const [isMatch, setIsMatch] = useState(false);
  const { slug } = useParams();

  const acceptableRoutes = [
    "/designs/app-design",
    "/designs/graphic-design",
    "/designs/web-design",
  ];

  useEffect(() => {
    let hasMatch = acceptableRoutes.some(
      (route) => route === `/designs/${slug}`
    );
    setIsMatch(hasMatch);
  }, [slug]);

  if (!isMatch) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return <Typography variant="h1">Designs page - {slug}</Typography>;
};

export default Designs;
