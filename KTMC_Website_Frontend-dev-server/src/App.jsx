import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Route";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <>
        <AppRoutes />
     
      </>
    </Router>
  );
}
 
export default App;
