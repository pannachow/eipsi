import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DragAndDrop from "../components/DragAndDrop";

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

export default function Day11() {
  return (
    <>
      <Box>
        <Typography style={styles.title2}>Show us the diversity of your classroom.</Typography>

        <Typography style={styles.title3} gutterBottom>
          Think about your average classroom and tell us what groups of diverse students are there
          in your classroom on the class map.
        </Typography>
        <Typography style={styles.title5} gutterBottom>
          Drag and drop the number of students belonging to the categories.
        </Typography>
      </Box>

      <DragAndDrop />

      <Box>
        <Typography style={styles.title4}>Done for the day? Before you head out . . . .</Typography>
        <Typography style={styles.title3} gutterBottom>
          think of one word to describe your workday today.
        </Typography>
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
    </>
  );
}
