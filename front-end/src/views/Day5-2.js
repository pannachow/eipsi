import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import TextField from "../components/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Day52() {
  const noteRef = useRef(null);
  const tellUsSomethingRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const history = useHistory();

  async function handInData() {
    const data = {
      note: noteRef.current.value,
      tellUsSomething: tellUsSomethingRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    try {
      history.push("/submitting");
      const response = await fetch(
        (process.env.REACT_APP_API_BASE_URL || "http://localhost:3001") + "/day5-2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 201) {
        history.push("/submit");
      } else {
        history.push("/error");
      }
    } catch (error) {
      history.push("/error");
    }
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
        Think about diversity, inclusivity and Evidence Informed Practices.
      </Typography>

      <Box pt="10px" pb="40px">
        <TextField multiline ref={noteRef} rows={16} />
      </Box>

      <Typography variant="h2" paragraph>
        Done for the day? Before you head out . . . .
      </Typography>

      <Typography variant="h3" color="textSecondary" paragraph>
        What is something we haven't asked but you would like to tell us?
      </Typography>

      <TextField multiline ref={tellUsSomethingRef} />

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
