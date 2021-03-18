import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import DragAndDrop from "../components/DragAndDrop";
import SubmitButton from "../components/SubmitButton";
import TextField from "../components/TextField";

export default function Day11() {
  return (
    <>
      <DayCardTitle day={1} card={1} />

      <Typography variant="h2" paragraph>
        Show us the diversity of your classroom.
      </Typography>

      <Typography variant="h3" paragraph>
        Think about your average classroom and tell us what groups of diverse students are there in
        your classroom on the class map.
      </Typography>

      <Typography variant="h3" color="error" paragraph>
        Drag and drop the number of students belonging to the categories.
      </Typography>

      <Box mb="60px">
        <DragAndDrop
          labelA="Socio Economic Diversity"
          labelB="Differently Abled"
          labelC="Other - Please Specify"
        />
      </Box>

      <Typography variant="h2" color="textSecondary" paragraph>
        Done for the day? Before you head out . . . .
      </Typography>

      <Typography variant="h3" paragraph>
        think of one word to describe your workday today.
      </Typography>

      <TextField />

      <SubmitButton />
    </>
  );
}
