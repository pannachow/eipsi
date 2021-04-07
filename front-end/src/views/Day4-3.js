import DayCardTitle from "../components/DayCardTitle";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "../components/TextField";
import { useRef } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


export default function Day43() {
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const history = useHistory();

  async function handInData() {
    const data = {
      text: textRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    try {
      const response = await fetch(
        (process.env.REACT_APP_API_BASE_URL || "http://localhost:3001") + "/day4-3",
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
      <DayCardTitle day={4} card={3} />
      <Typography variant="h2" paragraph>
      Tell us more
      </Typography>

      <Typography variant="h3" paragraph>
      If you have a high diversity (e.g. high migration/poverty) classroom, which sites and/or (digital) tools would you use to look up for exercises or teaching methods for that class?      </Typography>

      <Box pt="10px" pb="40px">
        <TextField multiline ref={textRef} rows={16} />
      </Box>
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
