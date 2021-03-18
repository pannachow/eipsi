import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function SubmitButton({ onClick }) {
  const history = useHistory();

  function onInternalClick() {
    onClick && onClick();
    history.push("/submit");
  }

  return (
    <Box mt="40px" display="flex" justifyContent="flex-end">
      <Button variant="contained" color="primary" onClick={onInternalClick}>
        SUBMIT
      </Button>
    </Box>
  );
}
