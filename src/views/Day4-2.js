import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

  return (
    <>
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
                <button>This is a slider in the future.</button>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
}
