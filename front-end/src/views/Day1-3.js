import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import SubmitButton from "../components/SubmitButton";
import TextField from "../components/TextField";

export default function Day13() {
  return (
    <>
      <DayCardTitle day={1} card={3} />

      <Typography variant="h2" paragraph>
        Show us your Mood.
      </Typography>

      <Typography variant="h3" paragraph>
        How do you promote diversity and inclusion in your classroom?
      </Typography>

      <Typography variant="h3" paragraph>
        Make a mood board to show how you promote diversity and inclusion in your classroom. Also
        include how they see diversity?
      </Typography>

      <Box bgcolor="warning.main" borderRadius="20px" width="100%" height="400px"></Box>

      <Box mt="10px" mb="50px">
        <Grid container spacing={1} alignItems="center">
          <Grid item sm={3}>
            <IconButton component="label">
              <img alt="Add image to mood board" src="add-image.png" />
              <input type="file" accept="image/*" hidden />
            </IconButton>
          </Grid>
          <Grid item sm={9}>
            <TextField bgcolor="#E76024" placeholder="Add text to Mood board." color="white" />
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h2" color="textSecondary" paragraph>
        Done for the day? Before you head out . . . .
      </Typography>

      <Typography variant="h3" paragraph>
        think of one word to describe your workday today.
      </Typography>

      <TextField />

      <SubmitButton />
    </>
  );
}
