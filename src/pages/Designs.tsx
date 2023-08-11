import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./404";
import DesignsTemplate from "../components/templates/DesignsTemplate";

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

  return <>{slug && <DesignsTemplate slug={slug} />}</>;
};

export default Designs;
