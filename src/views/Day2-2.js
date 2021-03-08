import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Day2() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" variant="h1">
        Day Two
      </Typography>
      <br />
      <Typography align="center" variant="h4">
        Draw a face that shows how confident you are with using evidence informed data
      </Typography>
      <CanvasDraw brushRadius={4} imgSrc="head.png"/>
      <br />
      <Typography align="center" variant="h4">
        What is the perceived attitude towards EBP research? Use an Emoji that expresses the
        attitude towards the EBP research.
      </Typography>
      <br />
      <Typography>insert a set of emoji that they could drag</Typography>
      <br />
      <Typography align="center" variant="h4">
        End of day two
      </Typography>
      <Typography align="center" variant="h6">
        Could you explain why you felt this?
      </Typography>
      <br/>
      <input type="text" />
      <br />
      <Button variant="contained" color="secondary" component={Link} to="/day3">
        Next Day
      </Button>
    </Box>
  );
}
