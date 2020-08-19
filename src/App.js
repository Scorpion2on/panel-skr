import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
