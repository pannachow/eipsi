import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  // TODO: Remove in MUI v5.
  // https://stackoverflow.com/a/64135466
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Day11 from "./views/Day1-1";
import Day12 from "./views/Day1-2";
import Day13 from "./views/Day1-3";
import Day21 from "./views/Day2-1";
import Day22 from "./views/Day2-2";
import Day23 from "./views/Day2-3";
import Day31 from "./views/Day3-1";
import Day32 from "./views/Day3-2";
import Day33 from "./views/Day3-3";
import Day41 from "./views/Day4-1";
import Day42 from "./views/Day4-2";
import Day43 from "./views/Day4-3";
import Day51 from "./views/Day5-1";
import Day52 from "./views/Day5-2";
import Submit from "./views/Submit";

// prettier-ignore
const routes = [
  { path: "/", component: <Home />, filled: true },
  { path: "/submit", component: <Submit />, filled: true },
  { path: "/day1-1", component: <Day11 />, filled: false },
  { path: "/day1-2", component: <Day12 />, filled: false },
  { path: "/day1-3", component: <Day13 />, filled: false },
  { path: "/day2-1", component: <Day21 />, filled: false },
  { path: "/day2-2", component: <Day22 />, filled: false },
  { path: "/day2-3", component: <Day23 />, filled: false },
  { path: "/day3-1", component: <Day31 />, filled: false },
  { path: "/day3-2", component: <Day32 />, filled: false },
  { path: "/day3-3", component: <Day33 />, filled: false },
  { path: "/day4-1", component: <Day41 />, filled: false },
  { path: "/day4-2", component: <Day42 />, filled: false },
  { path: "/day4-3", component: <Day43 />, filled: false },
  { path: "/day5-1", component: <Day51 />, filled: false },
  { path: "/day5-2", component: <Day52 />, filled: false },
];

export default function App() {
  console.log(process.env);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#660362",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#EF383A",
      },
      warning: {
        main: "#F4CE12",
      },
      text: {
        primary: "#3487C0",
        secondary: "#0C4D7A",
      },
      titlePrimary: {
        main: "#A9F6FF",
      },
      titleSecondary: {
        main: "#04E8E8",
      },
    },
    typography: {
      fontFamily: ["Poppins"],
      fontStyle: "normal",
      h1: {
        fontWeight: 600,
        fontSize: "72px",
        lineHeight: "108px",
      },
      h2: {
        fontSize: "36px",
        lineHeight: "54px",
      },
      h3: {
        fontSize: "24px",
        lineHeight: "36px",
      },
      button: {
        fontWeight: 600,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box width="100%" minHeight="100%" display="flex" flexDirection="column">
          <Header />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} exact path={route.path}>
                <Content filled={route.filled}>
                  {route.component}
                </Content>
              </Route>
            ))}
          </Switch>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}
