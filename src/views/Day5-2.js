import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#A9F6FF",
    fontWeight: 600,
    fontSize: "72px",
    lineHeight: "108px",
    paddingTop: "50px",
  },
  title1_1: {
    color: "#02E8E8",
  },
  title2: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 600,
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
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  title4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#0C4D7A",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "54px",
    paddingTop: "50px",
    paddingBottom: "10px",
  },
  textArea: {
    width: "100%",
    height: "300px",
    background: "#A9F6FF",
    borderRadius: "20px",
  },
  button: {
    backgroundColor: "#660362",
    color: "white",
    float: "right",
    fontWeight: 600,
  },
};

export default function Day52() {
  return (
    <>
      <Box>
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 5 : <span style={styles.title1_1}>Card 2</span>
        </Typography>

        <Typography style={styles.title2} gutterBottom>
          Note to Self!
        </Typography>

        <Typography style={styles.title3}>
          Write a note to yourself about what you would like to do different regarding your teaching
          or classroom experience.
        </Typography>
        <Typography style={styles.title3} gutterBottom>
          Think about diversity, inclusivity and research-informed practices.{" "}
        </Typography>
      </Box>
      <br />
      <input type="text" style={styles.textArea} />
      <br />
      <Box>
        <Typography style={styles.title4}>Done for the day? Before you head out . . . .</Typography>
        <Typography style={styles.title3} gutterBottom>
          What is something we haven't asked but you would like to tell us?
        </Typography>
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
