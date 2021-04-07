import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Error() {

  return (
    <Box color="white">
      <Typography variant="h1" paragraph>
        Oops...
      </Typography>

      <Typography variant="h3" paragraph>
        Looks like something went wrong.
      </Typography>

      <Typography variant="h3" paragraph>
        Please let us know!
      </Typography>
    </Box>
  );
}
