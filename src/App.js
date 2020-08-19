import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
// import { BrowserRouter } from "react-router-dom";
// import Routes from "./Routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}
    </ThemeProvider>
  );
};
export default App;
