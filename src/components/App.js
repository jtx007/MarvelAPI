import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import Layout from "./Layout";
import { ThemeProvider } from "../ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Router>
          <Home path="/" />
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
