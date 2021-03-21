import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import TextField from "../components/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Day52() {
  const textField = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const history = useHistory();

  async function handInData() {
    const data = {
      ans: textField.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    await fetch("http://localhost:3001/day5-2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    history.push("/submit");
  }

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

      <TextField multiline ref={textField} />

      <Box mt="40px">
        <Typography variant="h3">Name</Typography>
        <TextField name="name" ref={nameRef} />

        <Box my="20px">
          <Typography variant="h3">Email</Typography>
          <TextField name="email" ref={emailRef} />
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" type="submit" onClick={handInData}>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </>
  );
}
