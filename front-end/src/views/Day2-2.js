import { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import DragAndDrop from "../components/DragAndDrop";
import Submit from "../components/Submit";
import { useApi, useForm } from "../hooks";

export default function Day22() {
  const api = useApi();
  const { register, handleSubmit, errors } = useForm();
  const [dnd, setDnd] = useState(null);

  async function onSubmit(data) {
    await api.post("/day2-2", {
      ...data,
      dnd,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DayCardTitle day={2} card={2} />

      <Typography variant="h2" paragraph>
        Drag and Drop.
      </Typography>

      <Typography variant="h3" paragraph>
        Drag and Drop the human emoji with the same number of time as you have discussed Evidence
        Informed Practices / Evidence Based Practices with different people within the last 2
        months.
      </Typography>

      <Typography variant="h3" color="error" paragraph>
        Drag and drop the number of people belonging to the categories.
      </Typography>

      <Box mb="20px">
        <DragAndDrop
          labelA="Other Teachers / Colleagues"
          labelB="Researchers"
          labelC="Other (family, friends, etc) - Please Specify"
          state={dnd}
          setState={setDnd}
        />
      </Box>

      <Submit register={register} errors={errors} />
    </form>
  );
}
