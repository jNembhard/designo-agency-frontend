import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SOCIALS } from "../../../graphql/socialQueries";
import { ISocial } from "../../../interface/Social";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { SocialsSkeleton } from "./SocialSkeleton";
import { socialStyles } from "./SocialStyles";

const Socials = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { loading, error, data } = useQuery(GET_SOCIALS, {
    variables: { count: 5 },
  });

  if (loading) return <SocialsSkeleton />;

  if (error) return <div>Error occured while fetching data</div>;

  const socials = [...data.socials.social];
  socials.sort((a: ISocial, b: ISocial) =>
    a.SocialID.localeCompare(b.SocialID)
  );

  return (
    <Stack sx={{ ...socialStyles.wrapper }} spacing={2}>
      {!loading && !error && (
        <div>
          {socials.map((social: ISocial) => {
            const { SocialID, socialUrl, title, icon } = social;

            return (
              <Link
                key={SocialID}
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  key={SocialID}
                  src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + icon}
                  component="img"
                  alt={title}
                  onMouseEnter={() => setHoveredIcon(SocialID)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  sx={{
                    ...socialStyles.iconStyle,
                    filter:
                      hoveredIcon === SocialID
                        ? "brightness(0) saturate(100%) invert(91%) sepia(19%) saturate(6125%) hue-rotate(303deg) brightness(114%) contrast(101%)"
                        : "none",
                  }}
                />
              </Link>
            );
          })}
        </div>
      )}
    </Stack>
  );
};

export default Socials;
