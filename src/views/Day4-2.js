import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = {
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#A9F6FF",
    fontWeight: 700,
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
  },
  title4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#04E8E8",
    fontWeight: 600,
    fontSize: "72px",
    lineHeight: "108px",
    textAlign: "center",
  },
  title5: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#0C4D7A",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
  },
  title6: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#1B5782",
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
};

export default function Day42() {
  const videos = [
    { number: 1, content: "Watching a video about Evidence-informed Practices (EIP)" },
    { number: 2, content: "Reading an article on EIP" },
    { number: 3, content: "Researching an EIP" },
    { number: 4, content: "Looking up methods and tools with EIP for the creation of high inclusion in a classroom" },
    { number: 5, content: "Preparation for a new exercise/lecture" },
    { number: 6, content: "Scrolling through a website for your work as a teacher" },
  ];
  return (
    <>
      <Box>
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 4 : <span style={styles.title1_1}>Card 2</span>
        </Typography>

        <Typography style={styles.title2}>Game time : Slide it.</Typography>

        <Typography style={styles.title3} gutterBottom>
          Please slide up the amount of time you will be willing to spend on:
        </Typography>
      </Box>

      <br />

      <Grid container spacing={6} justify="center" alignItems="center">
        {videos.map((video) => (
          <>
            <Grid item xs={2}>
              <Typography style={styles.title4}>{video.number}</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography style={styles.title5}>{video.content}</Typography>
              <button>This is a slider in the future.</button>
            </Grid>
          </>
        ))}
      </Grid>

      <br />
      <Box>
        <Typography style={styles.title6}>Name</Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <Box>
        <Typography style={styles.title6}>Email</Typography>
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
