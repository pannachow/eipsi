import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "./TextField";

export default function Submit({ onClick, register, errors }) {
  return (
    <Box mt="40px">
      <Typography variant="h3">Name</Typography>
      <TextField
        name="name"
        ref={register && register({ required: true })}
        error={errors && Boolean(errors["name"])}
      />

      <Box my="20px">
        <Typography variant="h3">Email</Typography>
        <TextField
          name="email"
          ref={register && register({ required: true })}
          error={errors && Boolean(errors["email"])}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" type="submit" onClick={onClick}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
}
