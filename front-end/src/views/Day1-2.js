import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import Submit from "../components/Submit";
import TextField from "../components/TextField";
import { useApi, useForm } from "../hooks";

const QUESTIONS = [
  "Tell us more about the status of inclusion in your school?",
  "Have you ever struggled with inclusion in your classroom and why?",
  "How would you describe your colleagues awareness of and knowledge about inclusion?",
  "Tell us a small story about when and how the topic diversity was prominent in the classroom.",
  "If you had all the power and money in the world, how would you make sure that topics like diversity and inclusion are spoken about in the field of education?",
];

export default function Day12() {
  const api = useApi();
  const { register, handleSubmit, errors } = useForm();

  async function onSubmit(data) {
    const questions = QUESTIONS.map((question, i) => ({
      question: question,
      answer: data[i],
    }));

    await api.post("/day1-2", {
      name: data.name,
      email: data.email,
      questions,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DayCardTitle day={1} card={2} />

      <Typography variant="h2" paragraph>
        Choose and answer any one question:
      </Typography>

      <Typography variant="h3" paragraph>
        Think about your average classroom and tell us what groups of diverse students are there in
        your classroom on the class map.
      </Typography>

      {QUESTIONS.map((question, i) => (
        <React.Fragment key={i}>
          <Typography variant="h3" paragraph>
            {i + 1}) {question}
          </Typography>

          <Box mb="20px">
            <TextField
              name={i.toString()}
              ref={register({ required: false })}
              error={Boolean(errors[i])}
            />
          </Box>

          {/* Only add "or" if not the last question */}
          {i < QUESTIONS.length - 1 && (
            <Typography variant="h2" color="textSecondary" align="center" paragraph>
              or
            </Typography>
          )}
        </React.Fragment>
      ))}

      <Submit register={register} errors={errors} />
    </form>
  );
}
