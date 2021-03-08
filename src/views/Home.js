import ProductCategories from "../components/ProductCategories";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://digitalsocietyschool.org/project/eipsi/">
        EIPSI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <br />
      <ProductCategories />
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          EVIDENCE INFORMED PRACTICE FOR SCHOOL INCLUSION (EIPSI){" "}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
}
