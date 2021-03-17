import { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CanvasDraw from "react-canvas-draw";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import TextInput from "../components/TextInput";

const styles = {
  emoji: {
    color: "#3487C0",
    fontSize: "24px",
    lineHeight: "36px",
    textAlign: "center",
  },
  clear: {
    position: "absolute",
    top: "10px",
    left: "20px",
    zIndex: 100,
  },
};

const emojis = [
  { label: "Motivated", src: "motivated.png" },
  { label: "No Feelings", src: "no_feelings.png" },
  { label: "Curious", src: "curious.png" },
  { label: "Annoyed", src: "annoyed.png" },
  { label: "Happy", src: "happy.png" },
  { label: "Boring", src: "boring.png" },
  { label: "No Idea What It Is", src: "no_idea_what_it_is.png" },
  { label: "Angry", src: "angry.png" },
];

export default function Day21() {
  const canvasRef = useRef();

  return (
    <>
      <Typography variant="h2" paragraph>
        Draw a face that shows how confident you are with using evidence informed data
      </Typography>

      <Container maxWidth="sm">
        <Box position="relative" mb="50px">
          <CanvasDraw
            ref={canvasRef}
            brushRadius={2}
            canvasWidth="100%"
            canvasHeight={600}
            brushColor="black"
            imgSrc="head.png"
          />
          <IconButton onClick={() => canvasRef.current.clear()} style={styles.clear}>
            <img alt="vector" src="vector.svg" />
          </IconButton>
        </Box>
      </Container>

      <Typography variant="h2" color="textSecondary" paragraph>
        Select an Emoji that expresses the attitude towards the Evidence based practices.
      </Typography>

      <Box py={5}>
        <Grid container spacing={3} style={styles.emoji}>
          {emojis.map((emoji) => (
            <Grid key={emoji.label} item xs={3}>
              <img alt={emoji.label} src={emoji.src} />
              <Typography style={styles.emoji}>{emoji.label}</Typography>
              <Checkbox />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography variant="h2" color="textSecondary" paragraph>
        Done for the day? Before you head out . . . .
      </Typography>

      <Typography variant="h3" paragraph>
        Tell us why you feel like this towards the Evidence based Practices.
      </Typography>

      <TextInput />
    </>
  );
}
