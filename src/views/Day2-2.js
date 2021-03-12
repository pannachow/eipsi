import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DragAndDrop2 from "../components/DragAndDrop2";

const styles = {
  title2: {
    color: "#3487C0",
    fontSize: "36px",
    lineHeight: "54px",
  },
  title3: {
    color: "#3487C0",
    fontSize: "24px",
    lineHeight: "36px",
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  title4: {
    color: "#0C4D7A",
    fontSize: "36px",
    lineHeight: "54px",
    paddingTop: "50px",
  },
  title5: {
    color: "#EF383A",
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
};

export default function Day22() {
  return (
    <>
      <Box>
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
    </>
  );
}
