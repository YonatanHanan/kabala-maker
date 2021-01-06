import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={6}>
            <Display />
          </Grid>
          <Grid item xs={6}>
            <Editor />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
