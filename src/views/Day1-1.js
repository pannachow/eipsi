import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Day1() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" variant="h2">
        Day One
      </Typography>

      <Typography align="center" variant="h5">
        Show us the diversity of your classroom.
      </Typography>

      <Typography align="center" variant="h6">
        Think about your average classroom and tell us what groups of diverse students are there in
        your classroom on the class map.
      </Typography>

      <br />

      <Typography align="center" variant="h2">
        End of day one
      </Typography>

      <Typography align="center" variant="h4">
        Done for the day?
      </Typography>

      <Typography align="center" variant="h6">
        Before you head out, think of one word to describe your workday today.
      </Typography>

      <br />
      <input type="text" />
      <br />
      <Button variant="contained" color="secondary" component={Link} to="/day2">
        Next Day
      </Button>
    </Box>
  );
}
