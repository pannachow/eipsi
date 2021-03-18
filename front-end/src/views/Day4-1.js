import { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import DayCardTitle from "../components/DayCardTitle";
import SubmitButton from "../components/SubmitButton";

const useStyles = makeStyles(theme => ({
  rowNumber: {
    color: theme.palette.titleSecondary.main,
  },
}));

export default function Day41() {
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [thirdChoice, setThirdChoice] = useState(null);
  const [fourthChoice, setFourthChoice] = useState(null);
  const [fifthChoice, setFifthChoice] = useState(null);

  return (
    <>
      <DayCardTitle day={4} card={1} />

      <Typography variant="h2" paragraph>
        Game time : This or that.
      </Typography>

      <Typography variant="h3" paragraph>
        Choose one of the options as answer between the two.
      </Typography>

      <Box py="20px">
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
      </Box>

      <SubmitButton />
    </>
  );
}

function Row({ number, selected, setSelected, optionA, optionB }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={1}>
        <Typography variant="h1" className={classes.rowNumber}>
          {number}
        </Typography>
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
        <Typography variant="h3" align="center">
          or
        </Typography>
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
      <Typography variant="h3" color="textSecondary">
        {label}
      </Typography>
    </Box>
  );
}
