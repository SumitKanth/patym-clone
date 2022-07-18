import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";

const App = () => {
  return(
    <>
    <Navbar />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    </>
  )
}

export default App