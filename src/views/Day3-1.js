import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Day3() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" variant="h2">
        Day 3
      </Typography>

      <Typography align="center">
        Imagine you just started teaching at a new primary school.
      </Typography>

      <Typography align="center">
        One of your students is Paul, who is a 5 year old boy with dyslexia. His reading skills are
        below average and you decide to look up evidence-based practices to help you teach Paul.
      </Typography>

      <Typography align="center">
        Please try to find practices that could help improve Paul's reading skills and answer the
        following questions after:
      </Typography>

      <br />
      <Typography align="center" variant="h6">
        Where did you look?
      </Typography>
      <input type="text" />

      <Typography align="center" variant="h6">
        How long did it take you to find information?
      </Typography>
      <input type="text" />

      <Typography align="center" variant="h6">
        Are you satisfied with the quality of information?
      </Typography>
      <input type="text" />

      <Typography align="center" variant="h6">
        Do you feel confident using this practice in your classroom?
      </Typography>
      <input type="text" />
      <br />
      <Button variant="contained" color="secondary" component={Link} to="/Submit">
        SUBMIT
      </Button>
    </Box>
  );
}
