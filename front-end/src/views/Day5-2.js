import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextInput from "../components/TextInput";

export default function Day52() {
  return (
    <>
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
        <TextInput />
      </Box>

      <Typography variant="h2" paragraph>
        Done for the day? Before you head out . . . .
      </Typography>

      <Typography variant="h3" color="textSecondary" paragraph>
        What is something we haven't asked but you would like to tell us?
      </Typography>

      <TextInput multiline />
    </>
  );
}
