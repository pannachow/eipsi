import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "./TextField";

export default function SubmitButton({ onClick }) {
  return (
    <Box mt="40px">
      <Typography>Name</Typography>
      <TextField name="name" />
      <Typography>Email</Typography>
      <TextField name="email" />
      <Box mt="20px" display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" type="submit" onClick={onClick}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
}
