import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Display from "./components/Display/Display";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import { DefaultInfo } from "./types/defaults";
import { InputNames, InputTypes } from "./types/input";

function App() {
  const [info, setInfo] = useState<Record<InputNames, any>>(DefaultInfo);

  function editorOnChange(name: InputNames, type: InputTypes, value: any) {
    setInfo({ ...info, [name]: value });
    console.log(info);
  }

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={6}>
            <Display info={info} />
          </Grid>
          <Grid item xs={6}>
            <Editor onChange={editorOnChange} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
