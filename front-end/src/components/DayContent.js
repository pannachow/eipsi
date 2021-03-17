import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
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

export default function DayContent({ children, day, card }) {
  const classes = useStyles();

  return (
    <Box flexGrow={1} py={4}>
      <Container>
        <Typography variant="h1" className={classes.title1} gutterBottom>
          DAY {day} : <span className={classes.title2}>Card {card}</span>
        </Typography>

        {children}

        <Box mt="40px" display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/submit"
          >
            SUBMIT
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
