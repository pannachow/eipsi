import { forwardRef } from "react";
import MuiTextField from "@material-ui/core/TextField";
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

export default forwardRef(function TextField(
  { multiline, bgcolor, color, placeholder, value, onChange, name, error },
  ref
) {
  const classes = useStyles();
  const theme = useTheme();
  const style = {
    height: multiline ? "182px" : "91px",
    background: bgcolor || theme.palette.titlePrimary.main,
    color: color || theme.palette.text.primary,
  };

  return (
    <MuiTextField
      name={name}
      className={classes.textArea}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      inputRef={ref}
      multiline={multiline}
      error={error}
      variant="outlined"
    />
  );
});
