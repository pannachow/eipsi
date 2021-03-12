import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const styles = {
  title1: {
    color: "#A9F6FF",
  },
  title2: {
    color: "#02E8E8",
  },
  button: {
    marginTop: "30px",
    float: "right",
  },
};

export default function DayContent({ children, day, card }) {
  return (
    <Box flexGrow={1} py={4}>
      <Container>
        <Typography variant="h1" style={styles.title1} gutterBottom>
          DAY {day} : <span style={styles.title2}>Card {card}</span>
        </Typography>

        {children}

        <Button
          variant="contained"
          style={styles.button}
          color="primary"
          component={Link}
          to="/submit"
        >
          SUBMIT
        </Button>
      </Container>
    </Box>
  );
}
