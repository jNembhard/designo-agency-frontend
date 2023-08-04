import { useQuery } from "@apollo/client";
import { GET_SOCIALS } from "../../graphql/socialQueries";
import { ISocial } from "../../interface/Social";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Socials = () => {
  const { loading, error, data } = useQuery(GET_SOCIALS, {
    variables: { count: 5 },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const social = [...data.socials.social];
  social.sort((a: ISocial, b: ISocial) => a.SocialID.localeCompare(b.SocialID));

  return (
    <Stack>
      {!loading && !error && (
        <div>
          {social.map((social: ISocial) => (
            <Link key={social.SocialID} href={social.socialUrl}>
              <Box
                key={social.SocialID}
                src={social.icon}
                component="img"
                alt={social.name}
                sx={{ mx: 1 }}
              />
            </Link>
          ))}
        </div>
      )}
    </Stack>
  );
};

export default Socials;
