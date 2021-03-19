import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import Submit from "../components/Submit";
import TextField from "../components/TextField";

export default function Day52() {
  return (
    <>
      <DayCardTitle day={5} card={2} />

      <Typography variant="h2" paragraph>
        Note to Self!
      </Typography>

      <Typography variant="h3" paragraph>
        Write a note to yourself about what you would like to do different regarding your teaching
        or classroom experience.
      </Typography>

      <Typography variant="h3" paragraph>
        Think about diversity, inclusivity and research-informed practices.
      </Typography>

      <Box py="40px">
        <TextField />
      </Box>

      <Typography variant="h2" paragraph>
        Done for the day? Before you head out . . . .
      </Typography>

      <Typography variant="h3" color="textSecondary" paragraph>
        What is something we haven't asked but you would like to tell us?
      </Typography>

      <TextField multiline />

      <Submit />
    </>
  );
}
