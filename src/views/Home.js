import Container from "@material-ui/core/Container";
import DayGrid from "../components/DayGrid";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = {
  teacher: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paragraph1: {
    color: "white",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21px",
    paddingBottom: "10px",
  },
  paragraph2: {
    color: "white",
    fontSize: "14px",
  },
};

export default function Home() {
  return (
    <Container>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom style={styles.paragraph1}>
            Dear Teacher,
          </Typography>
          <Typography gutterBottom style={styles.paragraph1}>
            During the upcoming five days, we would like to hear more about your experience with
            Evidence-Informed Practices (EIP) and Evidence-Based Practices (EBP).
          </Typography>
          <Typography gutterBottom style={styles.paragraph1}>
            Below, you see five cards - one for each day. When you click on a day, you can choose
            between three different task options. Most tasks are designed to take approx. five
            minutes, but some might require a little more time.
          </Typography>
          <Typography gutterBottom style={styles.paragraph1}>
            We would like to ask you to at least complete one task a day but you are free to do more
            if you are interested. Please note that this is not a survey but rather a conversation
            starter and an open space for you to share your experiences/concerns/stories. Grab your
            favourite drink, put on some music, and tell us your story. As a team, we want to
            understand and empathise with you to be able to build a solution that fulfils their
            needs.
          </Typography>
          <br />
          <Typography gutterBottom style={styles.paragraph2}>
            We hope you enjoy the upcoming days. Thank you for your participation and feel free to
            contact us for any additional information.
          </Typography>
          <Typography style={styles.paragraph2}>Team EIPSI</Typography>
          <br />{" "}
        </Grid>

        <Grid item xs={12} sm={6}>
          <img style={styles.teacher} alt="Teacher" src="teacher.png" />
        </Grid>
      </Grid>

      <DayGrid />
      <br />
      <Typography gutterBottom style={styles.paragraph2}>
        Please note:
      </Typography>
      <Typography gutterBottom style={styles.paragraph2}>
        1. Your participation is voluntary and you are free to stop at any time without any negative
        consequences.
      </Typography>
      <Typography gutterBottom style={styles.paragraph2}>
        2. The data collected will be processed in accordance with the data protection law and will
        not be used for any other purposes and only stored for the duration of this project.
      </Typography>
    </Container>
  );
}
