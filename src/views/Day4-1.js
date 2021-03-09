import { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
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
  },
  title5: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#0C4D7A",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
  },
  button: {
    backgroundColor: "#660362",
    color: "white",
    float: "right",
    fontWeight: 600,
  },
};

export default function Day3() {
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [thirdChoice, setThirdChoice] = useState(null);
  const [fourthChoice, setFourthChoice] = useState(null);
  const [fifthChoice, setFifthChoice] = useState(null);

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

      <Grid container spacing={1} alignItems="center">
        <Row
          number={1}
          selected={firstChoice}
          setSelected={setFirstChoice}
          optionA={{ label: "Lecture (big lecture hall presentation)", value: "lecture" }}
          optionB={{ label: "Seminar (interactive small workshop)", value: "seminar" }}
        />
        <Row
          number={2}
          selected={secondChoice}
          setSelected={setSecondChoice}
          optionA={{ label: "Online Education tools", value: "online" }}
          optionB={{ label: "Offline Education tools", value: "offline" }}
        />
        <Row
          number={3}
          selected={thirdChoice}
          setSelected={setThirdChoice}
          optionA={{ label: "Lesson based on Personal Experience", value: "personal" }}
          optionB={{ label: "Lesson based on Objective Research", value: "objective" }}
        />
        <Row
          number={4}
          selected={fourthChoice}
          setSelected={setFourthChoice}
          optionA={{ label: "Have Videos explain how to use EIP or EBP", value: "video" }}
          optionB={{ label: "Have Articles explain how to use EIP or EBP", value: "articles" }}
        />
        <Row
          number={5}
          selected={fifthChoice}
          setSelected={setFifthChoice}
          optionA={{ label: "Small Classrooms (no. of students)", value: "small" }}
          optionB={{ label: "Big Classrooms (no. of students)", value: "big" }}
        />
      </Grid>

      <br />
      <br />
      <br />
      <Button variant="contained" style={styles.button} component={Link} to="/Submit">
        SUBMIT
      </Button>
      <br />
      <br />
      <br />
    </Container>
  );
}

function Row({ number, selected, setSelected, optionA, optionB }) {
  return (
    <>
      <Grid item xs={1}>
        <Typography style={styles.title4}>{number}</Typography>
      </Grid>
      <Grid item xs={5}>
        <Choice
          selected={selected}
          setSelected={setSelected}
          label={optionA.label}
          value={optionA.value}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography align="center" style={styles.title3}>OR</Typography>
      </Grid>
      <Grid item xs={5}>
        <Choice
          selected={selected}
          setSelected={setSelected}
          label={optionB.label}
          value={optionB.value}
        />
      </Grid>
    </>
  );
}

function Choice({ selected, setSelected, label, value }) {
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
        <IconButton style={{ width: size, height: size }} onClick={() => setSelected(value)}>
          {selected === value && <DoneIcon />}
        </IconButton>
      </Box>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Typography style={styles.title5}>{label}</Typography>
    </Box>
  );
}
