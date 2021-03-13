import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CanvasDraw from "react-canvas-draw";
import { useRef } from "react";
import { IconButton } from "@material-ui/core";
import TextInput from "../components/TextInput";

const styles = {
  clear: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 100,
  },
};

const questions = [
  "Where did you look?",
  "How long did it take you to find information?",
  "Are you satisfied with the quality of information?",
  "Do you feel confident using this practice in your classroom?",
];

export default function Day31() {
  const canvasRef = useRef();

  return (
    <>
      <Typography variant="h2" paragraph>
        Imagine!
      </Typography>

      <Typography variant="h3" paragraph>
        You just started teaching at a new primary school. One of your students is Paul, who is a 5
        year old boy with dyslexia. His reading skills are below average and you decide to look up
        evidence-based practices to help you teach Paul.
      </Typography>

      <Typography variant="h3" paragraph>
        Please try to find practices that could help improve Paul's reading skills.
      </Typography>

      <Typography variant="h3" paragraph>
        Answer the following questions after:
      </Typography>

      <Box py="20px">
        {questions.map((question) => (
          <>
            <Typography variant="h3" color="textSecondary" paragraph>
              {question}
            </Typography>
            <Box mb="20px">
              <TextInput />
            </Box>
          </>
        ))}
      </Box>

      <Typography variant="h2" color="textSecondary" gutterBottom>
        Show us . . . .
      </Typography>

      <Typography variant="h3" paragraph>
        Please show us the steps you took by drawing in the timeline and also tell us about the
        challenges faced.
      </Typography>

      <Box position="relative" py="20px">
        <CanvasDraw
          ref={canvasRef}
          brushRadius={2}
          canvasWidth="100%"
          canvasHeight={400}
          brushColor="orange"
          imgSrc="time.png"
        />
        <IconButton onClick={() => canvasRef.current.clear()} style={styles.clear}>
          <img alt="vector" src="vector.svg" />
        </IconButton>
      </Box>

      <TextInput />
    </>
  );
}
