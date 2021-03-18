import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function SubmitButton({ onClick }) {
  return (
    <Box mt="40px" display="flex" justifyContent="flex-end">
      <Button variant="contained" color="primary" type="submit" onClick={onClick}>
        SUBMIT
      </Button>
    </Box>
  );
}
