import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CanvasDraw from "react-canvas-draw";
import { SketchPicker } from "react-color";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


export default function Day5() {
  const [brushColor, setBrushColor] = useState("#444");

  function onChangeComplete(color) {
    setBrushColor(color.hex);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" variant="h1">
        Day 5
      </Typography>
      <br />
      <Typography align="center" variant="h4">
        What were your feelings as a teacher during the week? Draw a line showing us on the map.
      </Typography>

      <Box display="flex" flexDirection="row">
        <CanvasDraw brushColor={brushColor} brushRadius={4} imgSrc="mon-fri.jpg" />
        &nbsp;&nbsp;
        <SketchPicker color={brushColor} onChangeComplete={onChangeComplete} />
      </Box>

      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CanvasDraw brushColor={brushColor} brushRadius={4} imgSrc="mon-fri.jpg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <SketchPicker color={brushColor} onChangeComplete={onChangeComplete} />
        </Grid>
      </Grid> */}

      <br />
      <Typography align="center" variant="h4">
        Please elaborate wherever there was a high change in emotion as to why?
      </Typography>
      <br />
      <input type="text" />
      <br />
      <Button variant="contained" color="secondary" component={Link} to="/Submit">
        SUBMIT
      </Button>
    </Box>
  );
}
