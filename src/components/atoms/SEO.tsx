import { Helmet } from "react-helmet-async";

type Seo = {
  author: string;
  title: string;
  description: string;
  type: string;
};

const SEO = ({ author, title, description, type }: Seo) => {
  return (
    <Helmet>
      <title>{title} | Designo</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | Designo`} />
      <meta property="og:description" content={description} />
      <meta property="twitter:creator" content={author} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={`${title} | Designo`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
export default SEO;
