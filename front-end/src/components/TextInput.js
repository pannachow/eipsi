import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textArea: {
    width: "100%",
    border: 0,
    borderRadius: "20px",
    padding: "20px",
    fontFamily: theme.typography.fontFamily,
  },
}));

export default function TextInput({ multiline, bgcolor, color, placeholder }) {
  const classes = useStyles();
  const theme = useTheme();
  const style = {
    height: multiline ? "182px" : "91px",
    background: bgcolor || theme.palette.titlePrimary.main,
    color: color || theme.palette.text.primary,
  };

  return multiline ? (
    <textarea className={classes.textArea} style={style} placeholder={placeholder} />
  ) : (
    <input type="text" className={classes.textArea} style={style} placeholder={placeholder} />
  );
}
