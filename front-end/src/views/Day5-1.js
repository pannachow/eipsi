import { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CanvasDraw from "react-canvas-draw";
import Container from "@material-ui/core/Container";
import { IconButton } from "@material-ui/core";
import DayCardTitle from "../components/DayCardTitle";
import Submit from "../components/Submit";
import TextField from "../components/TextField";

const styles = {
  clear: {
    position: "absolute",
    top: "5px",
    left: "5px",
    zIndex: 100,
  },
};

export default function Day51() {
  const canvasRef = useRef();

  return (
    <>
      <DayCardTitle day={5} card={1} />

      <Typography variant="h2" paragraph>
        Draw it!
      </Typography>

      <Typography variant="h3" paragraph>
        What were your feelings as a teacher during the week? Draw the line representing the week.
      </Typography>

      <Typography variant="h3" paragraph>
        Add a comment to highlight the crucial points
      </Typography>

      <Container maxWidth="sm">
        <Box position="relative" my="40px">
          <CanvasDraw
            ref={canvasRef}
            brushRadius={2}
            canvasWidth="105%"
            canvasHeight={500}
            brushColor="orange"
            imgSrc="feelings_table.png"
          />
          <IconButton onClick={() => canvasRef.current.clear()} style={styles.clear}>
            <img alt="vector" src="vector.svg" />
          </IconButton>
        </Box>
      </Container>

      <Typography variant="h2" color="textSecondary" paragraph>
        Done for the day? Before you head out . . . .
      </Typography>

      <Typography variant="h3" paragraph>
        What is something we haven't asked but you would like to tell us?
      </Typography>

      <TextField />

      <Submit />
    </>
  );
}
