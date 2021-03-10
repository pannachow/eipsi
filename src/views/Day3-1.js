import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CanvasDraw from "react-canvas-draw";
import { useRef } from "react";
import { IconButton } from "@material-ui/core";

const styles = {
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#A9F6FF",
    fontWeight: 700,
    fontSize: "72px",
    lineHeight: "108px",
  },
  title1_1: {
    color: "#02E8E8",
  },
  title2: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 550,
    fontSize: "36px",
    lineHeight: "54px",
  },
  title3: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
    paddingTop: "20px",
  },
  title4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#1B5782",
    fontWeight: 550,
    fontSize: "36px",
    lineHeight: "54px",
    paddingTop: "20px",
  },
  title5: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#0C4D7A",
    fontWeight: 550,
    fontSize: "36px",
    lineHeight: "54px",
    paddingTop: "20px",
  },
  textArea: {
    width: "100%",
    height: "91px",
    left: "193px",
    top: "1477px",
    background: "#A9F6FF",
    borderRadius: "20px",
  },
  button: {
    backgroundColor: "#660362",
    color: "white",
    float: "right",
    fontWeight: 600,
  },
  clear: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 100,
  },
};

export default function Day31() {
  const canvasRef = useRef();

  return (
    <>
      <Box alignItems="left">
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 3 : <span style={styles.title1_1}>Card 1</span>
        </Typography>

        <Typography style={styles.title2}>Imagine!</Typography>

        <Typography style={styles.title3} gutterBottom>
          you just started teaching at a new primary school. One of your students is Paul, who is a
          5 year old boy with dyslexia. His reading skills are below average and you decide to look
          up evidence-based practices to help you teach Paul.
        </Typography>

        <Typography style={styles.title3} gutterBottom>
          Please try to find practices that could help improve Paul's reading skills.
        </Typography>
        <Typography style={styles.title3} gutterBottom>
          Answer the following questions after:
        </Typography>
      </Box>

      <Box>
        <Typography style={styles.title4} gutterBottom>
          Where did you look?
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <Box>
        <Typography style={styles.title4} gutterBottom>
          How long did it take you to find information?
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <Box>
        <Typography style={styles.title4} gutterBottom>
          Are you satisfied with the quality of information?
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <Box>
        <Typography style={styles.title4} gutterBottom>
          Do you feel confident using this practice in your classroom?
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <br />
      <Box>
        <Typography style={styles.title5} gutterBottom>
          Show us . . . .
        </Typography>
        <Typography style={styles.title3} gutterBottom>
          Please show us the steps you took by drawing in the timeline and also tell us about the
          challenges faced.
        </Typography>
        <br />

        <Box position="relative">
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
        <br />
        <input type="text" style={styles.textArea} />
      </Box>
      <Box>
        <Typography style={styles.title4}>Name</Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <Box>
        <Typography style={styles.title4}>Email</Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <br />
      <Button variant="contained" style={styles.button} component={Link} to="/submit">
        SUBMIT
      </Button>
    </>
  );
}
