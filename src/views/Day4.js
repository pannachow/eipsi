import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Day4() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" variant="h2">
        Day 4
      </Typography>

      <br />
      <Typography align="center" variant="h5">
        Every question has a time limit of 5 seconds.
      </Typography>
      <br />

      <Typography align="center" variant="h6">
        1) Rather use google scholar for research or use news articles and mouth 2 mouth data
      </Typography>
      <br />
      <Typography align="center" variant="h6">
        2) Have videos that explains how to use EIP and EBP or have articles about it
      </Typography>
      <br />
      <Typography align="center" variant="h6">
        3) Discuss Research with school leaders or discuss research with fellow teachers
      </Typography>
      <br />
      <Typography align="center" variant="h6">
        4) Have an open platform for EIP or have a central school HUB for EIP
      </Typography>
      <br />
      <br/>
      <Button variant="contained" color="secondary" component={Link} to="/day5">
        Next Day
      </Button>
    </Box>
  );
}
