import React, { useState } from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGray from "@material-ui/core/colors/blueGrey";
import { AppBar, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Projects from "./screens/Projects";
import Services from "./screens/Services";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: blueGray,
    },
  });

  const [selected, setSelected] = useState("Projects");

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
              alt="logo"
              className="Logo"
            />
            <Link
              to="/projects"
              className="AppBarLink"
              id={selected === "Projects" ? "selected" : ""}
              onClick={() => setSelected("Projects")}
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="AppBarLink"
              id={selected === "Services" ? "selected" : ""}
              onClick={() => setSelected("Services")}
            >
              Services
            </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
