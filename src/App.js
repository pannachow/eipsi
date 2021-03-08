import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Banner from "./components/Banner";
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


function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Banner />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/day1-1" component={Day11} />
            <Route path="/day1-2" component={Day12} />
            <Route path="/day1-3" component={Day13} />
            <Route path="/day2-1" component={Day21} />
            <Route path="/day2-2" component={Day22} />
            <Route path="/day2-3" component={Day23} />
            <Route path="/day3-1" component={Day31} />
            <Route path="/day3-2" component={Day32} />
            <Route path="/day3-3" component={Day33} />
            <Route path="/day4-1" component={Day41} />
            <Route path="/day4-2" component={Day42} />
            <Route path="/day4-3" component={Day43} />
            <Route path="/day5-1" component={Day51} />
            <Route path="/day5-2" component={Day52} />
            <Route path="/day5-3" component={Day53} />
            <Route path="/Submit" component={Submit} />
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
