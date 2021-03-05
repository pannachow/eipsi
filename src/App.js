import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "./components/AppBar";
import Home from "./views/Home";
import UnderConstruction from "./views/UnderConstruction";
import Day1 from "./views/Day1";
import Day2 from "./views/Day2";
import Day3 from "./views/Day3";
import Day4 from "./views/Day4";
import Day5 from "./views/Day5";


function App() {
  const [darkMode, setDarkMode] = useLocalStorageState(
    "darkMode",
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Box display="flex" flexDirection="column" height="100%">
          <Box flexGrow={1}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/day1" component={Day1} />
              <Route path="/day2" component={Day2} />
              <Route path="/day3" component={Day3} />
              <Route path="/day4" component={Day4} />
              <Route path="/day5" component={Day5} />
              <Route component={UnderConstruction} />
            </Switch>
          </Box>

        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
