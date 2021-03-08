import React from "react";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";


export default function appBar({ darkMode, setDarkMode }) {
  return (
    <AppBar>
      <Box flexDirection="row">
        <Link color="inherit" href="">
        <Box display="flex" alignItems="center">
          <HomeIcon />
          <Typography>Home</Typography>
        </Box>
        </Link>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          {darkMode ? <Brightness4OutlinedIcon /> : <Brightness5TwoToneIcon />}
          <Switch
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
            color="default"
            name="darkMode"
            inputProps={{ "aria-label": "toggle dark mode" }}
          />
        </Box>
      </Box>
    </AppBar>
  );
}
