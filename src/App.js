import { useState } from "react";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextForm";

const App = () => {
  const [mode, setMode] = useState(false);

  return (
    <div
      style={{
        flexGrow: 1,
        backgroundColor: mode == true ? "#FFF" : "#000000",
        height: "100vh",
      }}
    >
      <Navbar mode={mode} setMode={setMode} />
      <div
        style={{
          backgroundColor: mode == true ? "#FFF" : "#000000",
        }}
        className="container my-4"
      >
        <h1
          style={{
            color: mode == true ? "#000" : "#FFF",
          }}
        >
          Enter Text To Analyse
        </h1>
        <TextFrom mode={mode} setMode={setMode} />
      </div>
    </div>
  );
};

export default App;
