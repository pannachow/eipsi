import Typography from "@material-ui/core/Typography";
import DayCardTitle from "../components/DayCardTitle";
import Submit from "../components/Submit";

export default function Day23() {
  return (
    <>
      <DayCardTitle day={2} card={3} />

      <Typography variant="h2" paragraph>
        Create a Word Cloud
      </Typography>

      <Typography variant="h3" paragraph>
        Create a word cloud with all the words you can think about when you think about
        Evidence-Informed and Evidence-Based Practices
      </Typography>

      <Submit />
    </>
  );
}
