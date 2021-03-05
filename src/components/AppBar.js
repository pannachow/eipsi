import React from "react";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";

export default function AppBar({ darkMode, setDarkMode }) {
  return (
    <Box display="flex" alignItems="center" style={{ float: "right" }}>
      {darkMode ? <Brightness4OutlinedIcon /> : <Brightness5TwoToneIcon />}
      <Switch
        checked={darkMode}
        onChange={(event) => setDarkMode(event.target.checked)}
        color="default"
        name="darkMode"
        inputProps={{ "aria-label": "toggle dark mode" }}
      />
    </Box>
  );
}
