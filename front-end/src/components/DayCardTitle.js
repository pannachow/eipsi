import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title1: {
    color: theme.palette.titlePrimary.main,
  },
  title2: {
    color: theme.palette.titleSecondary.main,
  },
}));

export default function DayCardTitle({ day, card }) {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.title1} gutterBottom>
      DAY {day} : <span className={classes.title2}>Card {card}</span>
    </Typography>
  );
}
