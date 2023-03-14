import { useState } from "react";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextForm";

import Alert from "./components/Alert";

const App = () => {
  const [mode, setMode] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [alertText, setAlertText] = useState("");

  return (
    <div
      style={{
        flexGrow: 1,
        backgroundColor: mode == true ? "#FFF" : "#000000",
        height: "100vh",
      }}
    >
      <Navbar
        setAlertText={setAlertText}
        setShowAlert={setShowAlert}
        mode={mode}
        setMode={setMode}
      />
      {showAlert && <Alert alertText={alertText} />}
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
        <TextFrom
          setAlertText={setAlertText}
          setShowAlert={setShowAlert}
          mode={mode}
          setMode={setMode}
        />
      </div>
    </div>
  );
};

export default App;
