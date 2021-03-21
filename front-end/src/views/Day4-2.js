import { Fragment, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import DayCardTitle from "../components/DayCardTitle";
import Button from "@material-ui/core/Button";
import TextField from "../components/TextField";

const useStyles = makeStyles((theme) => ({
  rowNumber: {
    color: theme.palette.titleSecondary.main,
  },
}));

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

export default function Day42() {
  const choices = [
    {
      number: 1,
      content: "Watching a video about Evidence-informed Practices (EIP)",
      state: useState(20),
    },
    { number: 2, content: "Reading an article on EIP", state: useState(20) },
    { number: 3, content: "Researching an EIP", state: useState(20) },
    {
      number: 4,
      content:
        "Looking up methods and tools with EIP for the creation of high inclusion in a classroom",
      state: useState(20),
    },
    { number: 5, content: "Preparation for a new exercise/lecture", state: useState(20) },
    {
      number: 6,
      content: "Scrolling through a website for your work as a teacher",
      state: useState(20),
    },
  ];

  const classes = useStyles();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const history = useHistory();

  async function handInData() {
    const data = {
      values: choices.map((choice) => ({
        number: choice.number,
        content: choice.content,
        value: choice.state[0],
      })),
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    await fetch((process.env.API_BASE_URL || "http://localhost:3001") + "/day4-2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    history.push("/submit");
  }

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
          {choices.map((choice) => (
            <Fragment key={choice.number}>
              <Grid item xs={2}>
                <Typography variant="h1" className={classes.rowNumber} align="center">
                  {choice.number}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h3" color="textSecondary">
                  {choice.content}
                </Typography>

                <PrettoSlider
                  ThumbComponent={ThumbComponent}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={choice.state[0]}
                  onChange={(_, value) => choice.state[1](value)}
                />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Box>

      <Box mt="40px">
        <Typography variant="h3">Name</Typography>
        <TextField name="name" ref={nameRef} />

        <Box my="20px">
          <Typography variant="h3">Email</Typography>
          <TextField name="email" ref={emailRef} />
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" type="submit" onClick={handInData}>
            SUBMIT
          </Button>
        </Box>
      </Box>
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
