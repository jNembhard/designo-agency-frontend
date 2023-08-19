import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_SOCIALS } from "../../graphql/socialQueries";
import { ISocial } from "../../interface/Social";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Skeleton } from "@mui/material";

const Socials = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { loading, error, data } = useQuery(GET_SOCIALS, {
    variables: { count: 5 },
  });

  if (loading || isLoading) {
    return (
      <Stack
        direction="row"
        sx={{ mt: { mobile: "1.25rem", tablet: "unset" } }}
        spacing={1}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={24}
            height={24}
            sx={{ mx: 1, borderRadius: "8px" }}
          />
        ))}
      </Stack>
    );
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const socials = [...data.socials.social];
  socials.sort((a: ISocial, b: ISocial) =>
    a.SocialID.localeCompare(b.SocialID)
  );

  return (
    <Stack sx={{ mt: { mobile: "1.25rem", tablet: "unset" } }}>
      {!loading && !error && (
        <div>
          {socials.map((social: ISocial) => (
            <Link
              key={social.SocialID}
              href={social.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                key={social.SocialID}
                src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + social.icon}
                component="img"
                alt={social.title}
                onMouseEnter={() => setHoveredIcon(social.SocialID)}
                onMouseLeave={() => setHoveredIcon(null)}
                margin="0"
                padding="0"
                sx={{
                  mx: 1,
                  filter:
                    hoveredIcon === social.SocialID
                      ? "brightness(0) saturate(100%) invert(91%) sepia(19%) saturate(6125%) hue-rotate(303deg) brightness(114%) contrast(101%)"
                      : "none",
                }}
              />
            </Link>
          ))}
        </div>
      )}
    </Stack>
  );
};

export default Socials;
