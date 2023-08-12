import { Helmet } from "react-helmet-async";

export const SEO = ({
  author,
  title,
  description,
  type,
}: {
  author: string;
  title: string;
  description: string;
  type: string;
}) => {
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
