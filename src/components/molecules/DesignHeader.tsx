import { useQuery } from "@apollo/client";
import { GET_DESIGN_HEADER } from "../../graphql/designQueries";
import Typography from "@mui/material/Typography";

const DesignHeader = ({ designID }: { designID: string }) => {
  const { loading, error, data } = useQuery(GET_DESIGN_HEADER, {
    variables: { DesignID: designID },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const { header, name } = data.design;

  return (
    <div>
      {!loading && !error && (
        <div>
          <Typography>{name}</Typography>
          <Typography>{header}</Typography>
        </div>
      )}
    </div>
  );
};

export default DesignHeader;
