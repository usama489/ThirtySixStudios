import "./index.css";
import Animation from "./Components/Animation";
import LocomotiveScroll from "locomotive-scroll";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Ui from "./Components/Ui";

const App = () => {
  const [theme, setTheme] = useState("light"); //default theme is light

  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll();
    
  }, []);

  //Toggle function to switch themes
  const toggleTheme = () => {
    console.log("button clicked");

    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = theme; //theme is the state variable can be light or dark
  }, [theme]);

  return (
    <>
      
        <Header toggleTheme={toggleTheme} theme={theme}/>

        {showCanvas && <Animation />}

        <Ui
          showCanvas={showCanvas}
          setShowCanvas={setShowCanvas}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      
    </>
  );
};
export default App;
