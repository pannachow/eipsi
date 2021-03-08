import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const styles = {
  background: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "#660362",
    paddingBottom: "100px",
  },
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "white",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "54px",
  },
  box: {
    backgroundColor: "#F4CE08",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    padding: "10px",
  },
  home: {
    color: "white",
    fontWeight: "bold",
    fontSize: "24px"
  }
};

export default function Home() {
  return (
    <div style={styles.background}>
      <Container>
        <br />
        <br />
        <br />
        <Typography gutterBottom style={styles.title1} align="center">
          Thank you for participating today!
        </Typography>
        <br />
        <br />
        <br />
        <Link underline="none" component={RouterLink} to="/">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
          <img alt="Home" src="Home.png" />
          &nbsp;&nbsp;&nbsp;
          <Box style={styles.box}>
            <Typography style={styles.home}>More cards for the Day</Typography>
          </Box>
        </Box>
        </Link>
      </Container>
    </div>
  );
}
