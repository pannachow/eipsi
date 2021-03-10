import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  // TODO: Remove in MUI v5.
  // https://stackoverflow.com/a/64135466
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import Banner from "./components/Banner";
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
  { path: "/", filled: true, component: <Home /> },
  { path: "/submit", filled: true, component: <Submit /> },
  { path: "/day1-1", filled: false, component: <Day11 /> },
  { path: "/day1-2", filled: false, component: <Day12 /> },
  { path: "/day1-3", filled: false, component: <Day13 /> },
  { path: "/day2-1", filled: false, component: <Day21 /> },
  { path: "/day2-2", filled: false, component: <Day22 /> },
  { path: "/day2-3", filled: false, component: <Day23 /> },
  { path: "/day3-1", filled: false, component: <Day31 /> },
  { path: "/day3-2", filled: false, component: <Day32 /> },
  { path: "/day3-3", filled: false, component: <Day33 /> },
  { path: "/day4-1", filled: false, component: <Day41 /> },
  { path: "/day4-2", filled: false, component: <Day42 /> },
  { path: "/day4-3", filled: false, component: <Day43 /> },
  { path: "/day5-1", filled: false, component: <Day51 /> },
  { path: "/day5-2", filled: false, component: <Day52 /> },
  { path: "/day5-3", filled: false, component: <Day53 /> },
];

function App() {
  const theme = createMuiTheme({
    palette: {
      // primary: blue,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Banner />
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} exact path={route.path}>
              <Content filled={route.filled} component={route.component} />
            </Route>
          ))}
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

function Content({ component, filled }) {
  const optionalProps = filled
    ? {
        width: "100%",
        minHeight: "100%",
        bgcolor: "#660362",
      }
    : {};
  return (
    <Box {...optionalProps} pb="100px">
      <Container>
        {component}
      </Container>
    </Box>
  );
}

export default App;
