import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textArea: {
    width: "100%",
    background: theme.palette.titlePrimary.main,
    border: 0,
    borderRadius: "20px",
    padding: "20px",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
  },
}));

export default function TextInput({ multiline }) {
  const classes = useStyles();
  const style = { height: multiline ? "182px" : "91px" };

  return multiline ? (
    <textarea className={classes.textArea} style={style} />
  ) : (
    <input type="text" className={classes.textArea} style={style} />
  );
}
