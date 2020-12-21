import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blueGray from '@material-ui/core/colors/blueGrey'

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: blueGray
    },
  });


  return (
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </ThemeProvider>
  );
}