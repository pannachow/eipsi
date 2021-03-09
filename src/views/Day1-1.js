import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = {
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#A9F6FF",
    fontWeight: 600,
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
    fontWeight: 500,
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
  },
  title4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#0C4D7A",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "54px",
  },
  title5: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#EF383A",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
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
  },
};

export default function Day1() {
  return (
    <Container>
      <Box alignItems="left">
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 1 : <span style={styles.title1_1}>Card 1</span>
        </Typography>

        <Typography style={styles.title2}>Show us the diversity of your classroom.</Typography>

        <Typography style={styles.title3} gutterBottom>
          Think about your average classroom and tell us what groups of diverse students are there
          in your classroom on the class map.
        </Typography>
        <Typography style={styles.title5} gutterBottom>
          Drag and drop the number of students belonging to the categories.
        </Typography>
      </Box>
      <img
        alt="openmoji_man-student-medium-skin-tone"
        src="openmoji_man-student-medium-skin-tone.png"
      />
      <img
        alt="openmoji_woman-student-medium-dark-skin-tone"
        src="openmoji_woman-student-medium-dark-skin-tone.png"
      />
      <img alt="openmoji_student" src="openmoji_student.png" />
      <img alt="openmoji_woman-student" src="openmoji_woman-student.png" />
      <img alt="classroom" src="classroom.png" />
      <br />
      <Box>
        <Typography style={styles.title4}>Done for the day? Before you head out . . . .</Typography>
        <Typography style={styles.title3} gutterBottom>
          think of one word to describe your workday today.
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <Button variant="contained" style={styles.button} component={Link} to="/Submit">
        SUBMIT
      </Button>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
