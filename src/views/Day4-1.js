import { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#A9F6FF",
    fontWeight: 700,
    fontSize: "72px",
    lineHeight: "108px",
    paddingTop: "30px",
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
    paddingTop: "20px",
  },
  title4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#04E8E8",
    fontWeight: 600,
    fontSize: "72px",
    lineHeight: "108px",
  },
  button: {
    backgroundColor: "#660362",
    color: "white",
    float: "right",
  },
};

export default function Day3() {
  const [firstChoice, setFirstChoice] = useState(null);

  return (
    <Container>
      <Box alignItems="left">
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 4 : <span style={styles.title1_1}>Card 1</span>
        </Typography>

        <Typography style={styles.title2}>Game time : This or that. </Typography>

        <Typography style={styles.title3} gutterBottom>
          Choose one of the options as answer between the two.
        </Typography>
      </Box>

      <Box py={5}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={1}>
            <Typography style={styles.title4}>1</Typography>
          </Grid>
          <Grid item xs={5}>
            <BulletPoint
              text="Lecture (big lecture hall presentation)"
              checked={firstChoice === "lecture"}
              onClick={() => setFirstChoice("lecture")}
            />
          </Grid>
          <Grid item xs={1}>
            OR
          </Grid>
          <Grid item xs={5}>
            <BulletPoint
              text="Seminar (interactive small workshop)"
              checked={firstChoice === "seminar"}
              onClick={() => setFirstChoice("seminar")}
            />
          </Grid>
        </Grid>
      </Box>
      <br />
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

function BulletPoint({ text, checked, onClick }) {
  const size = "40px";
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#FFE843"
        borderRadius="50%"
        width={size}
        height={size}
        boxShadow={2}
      >
        <IconButton style={{ width: size, height: size }} onClick={onClick}>
          {checked && <DoneIcon />}
        </IconButton>
      </Box>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Typography>{text}</Typography>
    </Box>
  );
}
