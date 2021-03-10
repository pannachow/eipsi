import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DragAndDrop2 from "../components/DragAndDrop2";

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
  },
  title5: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#EF383A",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
    paddingBottom: "20px",
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
};

export default function Day22() {
  return (
    <>
      <Box>
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 2 : <span style={styles.title1_1}>Card 2</span>
        </Typography>

        <Typography style={styles.title2}>Drag and Drop.</Typography>

        <Typography style={styles.title3} gutterBottom>
          Drag and Drop the human emoji with the same number of time as you have discussed Evidence
          Informed Practices / Evidence Based Practices with different people within the last 2
          months.
        </Typography>
        <Typography style={styles.title5} gutterBottom>
          Drag and drop the number of people belonging to the categories.
        </Typography>
      </Box>

      <DragAndDrop2 />
      <br />
      <br />
      <Button variant="contained" style={styles.button} component={Link} to="/submit">
        SUBMIT
      </Button>
    </>
  );
}
