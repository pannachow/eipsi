import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import DragAndDrop from "../components/DragAndDrop";
import SubmitButton from "../components/SubmitButton";

export default function Day22() {
  return (
    <>
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
        />
      </Box>

      <SubmitButton />
    </>
  );
}
