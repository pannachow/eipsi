import { Fragment, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import DayCardTitle from "../components/DayCardTitle";
import Submit from "../components/Submit";
import TextField from "../components/TextField";
import { useForm } from "../hooks";
import { canvasToDataURL, post } from "../utils";

const styles = {
  clear: {
    position: "absolute",
    top: "30px",
    left: "10px",
    zIndex: 100,
  },
};

const questions = [
  "Where did you look?",
  "How long did it take you to find information?",
  "Are you satisfied with the quality of information?",
  "Do you feel confident using this practice in your classroom?",
];

export default function Day31() {
  const { register, handleSubmit, errors } = useForm();
  const canvasRef = useRef();

  async function onSubmit(data) {
    const questionsAnswers = questions.map((question, i) => ({
      question: question,
      answer: data[i],
    }));

    await post("/day3-1", {
      name: data.name,
      email: data.email,
      questionsAnswers,
      challengesFaced: data.challengesFaced,
      image: canvasToDataURL(canvasRef.current),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DayCardTitle day={3} card={1} />

      <Typography variant="h2" paragraph>
        Imagine!
      </Typography>

      <Typography variant="h3" paragraph>
        You just started teaching at a new primary school. One of your students is Paul, who is a 5
        year old boy with dyslexia. His reading skills are below average and you decide to look up
        evidence-based practices to help you teach Paul.
      </Typography>

      <Typography variant="h3" paragraph>
        Please try to find practices that could help improve Paul's reading skills.
      </Typography>

      <Typography variant="h3" paragraph>
        Answer the following questions after:
      </Typography>

      <Box py="20px">
        {questions.map((question, i) => (
          <Fragment key={i}>
            <Typography variant="h3" color="textSecondary" paragraph>
              {question}
            </Typography>
            <Box mb="20px">
              <TextField
                name={i.toString()}
                ref={register({ required: true })}
                error={Boolean(errors[i])}
              />
            </Box>
          </Fragment>
        ))}
      </Box>

      <Typography variant="h2" color="textSecondary" paragraph>
        Show us . . . .
      </Typography>

      <Typography variant="h3" paragraph>
        Please show us the steps you took by drawing in the timeline and also tell us about the
        challenges faced.
      </Typography>

      <Box position="relative" py="20px">
        <CanvasDraw
          ref={canvasRef}
          brushRadius={2}
          canvasWidth="100%"
          canvasHeight={300}
          brushColor="orange"
          imgSrc="time.png"
        />
        <IconButton onClick={() => canvasRef.current.clear()} style={styles.clear}>
          <img alt="vector" src="vector.svg" />
        </IconButton>
      </Box>

      <TextField
        name="challengesFaced"
        ref={register({ required: true })}
        error={Boolean(errors["challengesFaced"])}
      />

      <Submit register={register} errors={errors} />
    </form>
  );
}
