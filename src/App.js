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
import DayContent from "./components/DayContent";
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
import Day53 from "./views/Day5-3";
import Submit from "./views/Submit";

const routes = [
  { path: "/", component: <Content><Home /></Content> },
  { path: "/submit", component: <Content><Submit /></Content> },
  { path: "/day1-1", component: <DayContent day={1} card={1}><Day11 /></DayContent> },
  { path: "/day1-2", component: <DayContent day={1} card={2}><Day12 /></DayContent> },
  { path: "/day1-3", component: <DayContent day={1} card={3}><Day13 /></DayContent> },
  { path: "/day2-1", component: <DayContent day={2} card={1}><Day21 /></DayContent> },
  { path: "/day2-2", component: <DayContent day={2} card={2}><Day22 /></DayContent> },
  { path: "/day2-3", component: <DayContent day={2} card={3}><Day23 /></DayContent> },
  { path: "/day3-1", component: <DayContent day={3} card={1}><Day31 /></DayContent> },
  { path: "/day3-2", component: <DayContent day={3} card={2}><Day32 /></DayContent> },
  { path: "/day3-3", component: <DayContent day={3} card={3}><Day33 /></DayContent> },
  { path: "/day4-1", component: <DayContent day={4} card={1}><Day41 /></DayContent> },
  { path: "/day4-2", component: <DayContent day={4} card={2}><Day42 /></DayContent> },
  { path: "/day4-3", component: <DayContent day={4} card={3}><Day43 /></DayContent> },
  { path: "/day5-1", component: <DayContent day={5} card={1}><Day51 /></DayContent> },
  { path: "/day5-2", component: <DayContent day={5} card={2}><Day52 /></DayContent> },
  { path: "/day5-3", component: <DayContent day={5} card={3}><Day53 /></DayContent> },
];

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#660362",
        contrastText: "#ffffff",
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
                {route.component}
              </Route>
            ))}
          </Switch>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}
