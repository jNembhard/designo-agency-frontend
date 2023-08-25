import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { productSkeletonStyles } from "./ProductSkeletonStyles";

export const ProductSkeleton = ({ group }: { group: string }) => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");

  const [count, setCount] = useState(0);

  let cardCount = (productGroup: string) => {
    let count = 0;
    productGroup === "AppDesign"
      ? setCount(5)
      : productGroup === "WebDesign"
      ? setCount(6)
      : setCount(3);

    return count;
  };

  useEffect(() => {
    cardCount(group);
  }, [group]);

  return (
    <Grid
      container
      spacing={isBreakpoint1024 ? 3 : 0}
      sx={{ ...productSkeletonStyles.grid }}
    >
      {Array.from({ length: count }, (_, index) => (
        <Stack
          key={index}
          aria-label="Loading project..."
          spacing={2}
          direction={
            isBreakpoint1024 ? "column" : isBreakpoint767 ? "row" : "column"
          }
          sx={{ ...productSkeletonStyles.card }}
        >
          <Skeleton animation="wave" sx={{ ...productSkeletonStyles.image }} />
          <Stack sx={{ ...productSkeletonStyles.cardStack }}>
            <Skeleton
              animation="wave"
              sx={{ ...productSkeletonStyles.title }}
            />
            <Stack spacing={2} sx={{ ...productSkeletonStyles.cardContent }}>
              {Array.from({ length: 2 }, (_, index) => (
                <Skeleton
                  key={index}
                  animation="wave"
                  variant="rounded"
                  sx={{ ...productSkeletonStyles.content }}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Grid>
  );
};
