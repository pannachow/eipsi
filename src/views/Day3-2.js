import { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  title2: {
    color: "#3487C0",
    fontWeight: 550,
    fontSize: "36px",
    lineHeight: "54px",
  },
  title3: {
    color: "#3487C0",
    fontSize: "24px",
    lineHeight: "36px",
  },
  title4: {
    color: "#04E8E8",
    fontWeight: 600,
    fontSize: "72px",
    lineHeight: "108px",
  },
  title5: {
    color: "#0C4D7A",
    fontSize: "24px",
    lineHeight: "36px",
  },
  title6: {
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
};

export default function Day32() {
  const [choice, setChoice] = useState(null);

  return (
    <>
      <Box alignItems="left">
        <Typography style={styles.title2}>
          3 research articles, which one is research-informed?
        </Typography>

        <Typography style={styles.title3} gutterBottom>
          Open the three links for the articles and find out which one is an evidence based practice
          / resources. Mark your answer and let us know.
        </Typography>
      </Box>

      <Grid container spacing={1} alignItems="center">
        <Row
          number={1}
          selected={choice}
          setSelected={setChoice}
          label="Article 1 - 5 Signs That a Classroom Is Inclusive | Reading Rockets"
          value="1"
          link="https://www.readingrockets.org/article/5-signs-classroom-inclusive"
        />
        <Row
          number={2}
          selected={choice}
          setSelected={setChoice}
          label="Article 2 - 50 Tips and Tricks to Facilitating a More Inclusive Classroom | Weareteachers.com"
          value="2"
          link="https://www.weareteachers.com/tips-tricks-inclusive-classroom/"
        />
        <Row
          number={3}
          selected={choice}
          setSelected={setChoice}
          label="Article 3 - Teacher education for inclusion: Can a virtual learning object help? | ScienceDirect"
          value="3"
          link="https://www.sciencedirect.com/science/article/abs/pii/S0360131515000706?casa_token=AaRqWh28zoYAAAAA:gGQc-Uy7QOn4UGAe5sdTW0Lk9Pp3KvURd4Jt2rFDAKIPSb9F0-31C9ikZqflL7B3giIPIkHIiw"
        />
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
    </>
  );
}

function Row({ number, selected, setSelected, label, value, link }) {
  return (
    <>
      <Grid item xs={1}>
        <Typography style={styles.title4}>{number}</Typography>
      </Grid>
      <Grid item xs={11}>
        <Choice
          selected={selected}
          setSelected={setSelected}
          label={label}
          value={value}
          link={link}
        />
      </Grid>
    </>
  );
}

function Choice({ selected, setSelected, label, value, link }) {
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
      <Link href={link}>
        <Typography style={styles.title5}>{label}</Typography>
      </Link>
    </Box>
  );
}
