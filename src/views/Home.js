import Container from "@material-ui/core/Container";
import ProductCategories from "../components/ProductCategories";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = {
  background: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "#660362",
    paddingBottom: "100px",
  },
  teacher: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paragraph: {
    color: "white",
    fontSize: "14px",
  },
};

export default function Home() {
  return (
    <div style={styles.background}>
      <Container>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom style={styles.paragraph}>
              In the upcoming 5 days, 5 cards will be presented to you with numerous tasks. These
              tasks all relate to our EIPSI project which revolves around encouraging teachers to
              use research-informed resources related to inclusivity in the classrooms.
            </Typography>
            <br />
            <Typography gutterBottom style={styles.paragraph}>
              We ask you, the teacher, to complete the daily tasks and document this on our website.
              For every day, there will be a different page to record your findings, answers, and
              reactions. This data will be used and analyzed during our continuous progress of the
              project. Please do not include any personal information that may harm the privacy of
              yourself and others.
            </Typography>
            <br />
            <Typography gutterBottom style={styles.paragraph}>
              We hope you enjoy the upcoming days. Thank you for your participation and feel free to
              contact us for any additional information.
            </Typography>
            <br />
            <Typography style={styles.paragraph}>Team EIPSI</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img style={styles.teacher} alt="Teacher" src="teacher.png" />
          </Grid>
        </Grid>
        <ProductCategories />
      </Container>
    </div>
  );
}
