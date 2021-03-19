import { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import DayCardTitle from "../components/DayCardTitle";
import Submit from "../components/Submit";

const articles = [
  {
    label: "5 Signs That a Classroom Is Inclusive | Reading Rockets",
    link: "https://www.readingrockets.org/article/5-signs-classroom-inclusive",
  },
  {
    label: "50 Tips and Tricks to Facilitating a More Inclusive Classroom | Weareteachers.com",
    link: "https://www.weareteachers.com/tips-tricks-inclusive-classroom",
  },
  {
    label: "Teacher education for inclusion: Can a virtual learning object help? | ScienceDirect",
    link:
      "https://www.sciencedirect.com/science/article/abs/pii/S0360131515000706?casa_token=AaRqWh28zoYAAAAA:gGQc-Uy7QOn4UGAe5sdTW0Lk9Pp3KvURd4Jt2rFDAKIPSb9F0-31C9ikZqflL7B3giIPIkHIiw",
  },
];

export default function Day32() {
  const [choice, setChoice] = useState(null);

  return (
    <>
      <DayCardTitle day={3} card={2} />

      <Typography variant="h2" paragraph>
        3 research articles, which one is research-informed?
      </Typography>

      <Typography variant="h3" paragraph>
        Open the three links for the articles and find out which one is an evidence based practice /
        resources. Mark your answer and let us know.
      </Typography>

      <Box mb="20px">
        <Grid container spacing={2} alignItems="center">
          {articles.map((article, i) => (
            <Row
              number={i + 1}
              selected={choice}
              setSelected={setChoice}
              label={article.label}
              value={i}
              link={article.link}
            />
          ))}
        </Grid>
      </Box>

      <Submit />
    </>
  );
}

function Row({ number, selected, setSelected, label, value, link }) {
  const size = "40px";
  return (
    <>
      <Grid item xs={1}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#FFE843"
          borderRadius="50%"
          width={size}
          height={size}
          boxShadow={2}
          my={4}
        >
          <IconButton style={{ width: size, height: size }} onClick={() => setSelected(value)}>
            {selected === value && <DoneIcon />}
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h2">Article {number} -</Typography>
      </Grid>

      <Grid item xs={8}>
        <Link href={link}>
          <Typography variant="h3" color="textSecondary">
            {label}
          </Typography>
        </Link>
      </Grid>
    </>
  );
}
