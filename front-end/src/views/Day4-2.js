import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import DayCardTitle from "../components/DayCardTitle";
import Submit from "../components/Submit";

const useStyles = makeStyles((theme) => ({
  rowNumber: {
    color: theme.palette.titleSecondary.main,
  },
}));

const videos = [
  { number: 1, content: "Watching a video about Evidence-informed Practices (EIP)" },
  { number: 2, content: "Reading an article on EIP" },
  { number: 3, content: "Researching an EIP" },
  {
    number: 4,
    content:
      "Looking up methods and tools with EIP for the creation of high inclusion in a classroom",
  },
  { number: 5, content: "Preparation for a new exercise/lecture" },
  { number: 6, content: "Scrolling through a website for your work as a teacher" },
];

export default function Day42() {
  const classes = useStyles();
  const PrettoSlider = withStyles({
    root: {
      color: "#F4AA41",
    },
    thumb: {
      height: 24,
      width: 24,
      marginLeft: -12,
    },
    track: {
      margin: "4px",
      height: "14px",
      borderRadius: "10px",
      color: "#D35E3E",
    },
    rail: {
      height: "22px",
      borderRadius: "10px",
    },
  })(Slider);

  return (
    <>
      <DayCardTitle day={4} card={2} />

      <Typography variant="h2" paragraph>
        Game time : Slide it.
      </Typography>

      <Typography variant="h3" paragraph>
        Please slide up the amount of time you will be willing to spend on:
      </Typography>

      <Box py="20px" color="titleSecondary">
        <Grid container spacing={6} justify="center" alignItems="center">
          {videos.map((video) => (
            <>
              <Grid item xs={2}>
                <Typography variant="h1" className={classes.rowNumber} align="center">
                  {video.number}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h3" color="textSecondary">
                  {video.content}
                </Typography>

                <PrettoSlider
                  ThumbComponent={ThumbComponent}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={20}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Box>

      <Submit />
    </>
  );
}

function ThumbComponent(props) {
  return (
    <span {...props}>
      <img alt="slider" src="slider_clock.png" />
    </span>
  );
}
