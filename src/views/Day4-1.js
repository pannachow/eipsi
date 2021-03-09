import { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
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
    fontWeight: 600
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

      <Box
        paddingTop={5}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography style={styles.title4}>1</Typography>
        <BulletPoint
          text="Lecture (big lecture hall presentation)"
          checked={firstChoice === "lecture"}
          onClick={() => setFirstChoice("lecture")}
        />
        <Typography style={styles.title3}>OR</Typography>
        <BulletPoint
          text="Seminar (interactive small workshop)"
          checked={firstChoice === "seminar"}
          onClick={() => setFirstChoice("seminar")}
        />
      </Box>

      <Box
        paddingTop={2}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography style={styles.title4}>2</Typography>
        <BulletPoint
          text="Online Education tools"
          checked={secondChoice === "online"}
          onClick={() => setSecondChoice("online")}
        />
        <Typography style={styles.title3}>OR</Typography>
        <BulletPoint
          text="Offline Education tools"
          checked={secondChoice === "offline"}
          onClick={() => setSecondChoice("offline")}
        />
      </Box>

      <Box
        paddingTop={2}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography style={styles.title4}>3</Typography>
        <BulletPoint
          text="Lesson based on Personal Experience"
          checked={thirdChoice === "personal"}
          onClick={() => setThirdChoice("personal")}
        />
        <Typography paddingTop={2} style={styles.title3}>
          OR
        </Typography>
        <BulletPoint
          text="Lesson based on Objective Research"
          checked={thirdChoice === "objective"}
          onClick={() => setThirdChoice("objective")}
        />
      </Box>

      <Box
        paddingTop={2}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography style={styles.title4}>4</Typography>
        <BulletPoint
          text="Have Videos explain how to use EIP or EBP"
          checked={fourthChoice === "video"}
          onClick={() => setFourthChoice("video")}
        />
        <Typography style={styles.title3}>OR</Typography>
        <BulletPoint
          text="Have Articles explain how to use EIP or EBP"
          checked={fourthChoice === "articles"}
          onClick={() => setFourthChoice("articles")}
        />
      </Box>

      <Box
        paddingTop={2}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography style={styles.title4}>5</Typography>
        <BulletPoint
          text="Small Classrooms (no. of students)"
          checked={fifthChoice === "small"}
          onClick={() => setFifthChoice("small")}
        />
        <Typography style={styles.title3}>OR</Typography>
        <BulletPoint
          text="Big Classrooms (no. of students)"
          checked={fifthChoice === "big"}
          onClick={() => setFifthChoice("big")}
        />
      </Box>

      <br />
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Typography style={styles.title5}>{text}</Typography>
    </Box>
  );
}
