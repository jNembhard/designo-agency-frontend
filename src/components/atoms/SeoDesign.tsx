import { Helmet } from "react-helmet-async";
import { useQuery } from "@apollo/client";
import { GET_SEO_DESIGN } from "../../graphql/designQueries";
import { capitalizeWordsWithASpace } from "../../utils/capitalizeWords";
import { seoPath } from "../../utils/seoPath";

type DesignSeo = {
  author: string;
  slug: string;
  type: string;
};

const SeoDesign = ({ author, type, slug }: DesignSeo) => {
  const path = seoPath(slug);

  const { loading, error, data } = useQuery(GET_SEO_DESIGN, {
    variables: { DesignID: path },
  });

  if (loading) return <div aria-hidden="true"></div>;
  if (error) {
    return (
      <div aria-hidden="true">Error occured while fetching seo design data</div>
    );
  }

  const { header, title } = data.design;
  const capitalTitle = capitalizeWordsWithASpace(title);

  return (
    <Helmet>
      <title>{capitalTitle} | Designo</title>
      <meta name="description" content={header} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${capitalTitle} | Designo`} />
      <meta property="og:description" content={header} />
      <meta property="twitter:creator" content={author} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={`${capitalTitle} | Designo`} />
      <meta name="twitter:description" content={header} />
    </Helmet>
  );
};

export default SeoDesign;
