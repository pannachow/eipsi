import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const styles = {
  box: {
    backgroundColor: "#F4CE08",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "10px",
  },
  home: {
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
  },
};

export default function Submit() {
  return (
    <>
      <Box color="white" py="60px">
        <Typography variant="h2" align="center" paragraph>
          Thank you for participating today!
        </Typography>
      </Box>

      <Link underline="none" component={RouterLink} to="/">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
          <img alt="Home" src="home.png" />
          &nbsp;&nbsp;&nbsp;
          <Box style={styles.box} borderRadius={20}>
            <Typography style={styles.home}>More cards for the Day</Typography>
          </Box>
        </Box>
      </Link>
    </>
  );
}
