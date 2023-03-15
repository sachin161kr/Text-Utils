import { useState } from "react";

const TextFrom = ({ mode, setMode, setShowAlert, setAlertText }) => {
  const [text, setText] = useState("");

  const handleExtraSpaces = () => {
    if (text.length === 0) return;
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    setAlertText("Extra Spaces Removed!!");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    setAlertText("Text Copied!!");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      <div className="form-group">
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          style={{
            background: mode === true ? "#FFF" : "#1f1e1e",
            color: mode === true ? "#000" : "#fff",
          }}
          value={text}
          className="form-control"
          id="myBox"
          rows="6"
          placeholder="Enter Text Here!!"
        ></textarea>
        <button
          onClick={() => {
            if (text.length === 0) return;
            setText(text.toUpperCase());
            setAlertText("Changed to Uppercase");
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 2000);
          }}
          className="btn btn-primary m-3"
        >
          Convert To Uppercase
        </button>
        <button
          onClick={() => {
            if (text.length === 0) return;
            setText(text.toLowerCase());
            setAlertText("Changed to Lowercase");
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 2000);
          }}
          className="btn btn-primary m-3"
        >
          Convert To Lowercase
        </button>
        <button
          onClick={() => {
            if (text.length === 0) return;
            setText("");
            setAlertText("Text Cleared");
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 2000);
          }}
          className="btn btn-primary m-3"
        >
          Clear Text
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary m-3">
          Remove Extra Spaces
        </button>
        <button onClick={handleCopy} className="btn btn-primary m-3">
          Copy Text
        </button>
      </div>
      <h2
        style={{
          color: mode === true ? "#000" : "#FFF",
        }}
      >
        Text Summary
      </h2>
      <p
        style={{
          color: mode === true ? "#000" : "#FFF",
        }}
      >
        Total Words =
        {
          text.split(" ").filter((e) => {
            return e.length !== 0;
          }).length
        }
      </p>
      <div
        style={{
          color: mode === true ? "#000" : "#FFF",
        }}
      >
        Total Characters = {text.length}
      </div>
      <div
        style={{
          color: mode === true ? "#000" : "#FFF",
        }}
        className="my-3"
      >
        {Math.round(text.split(" ").length * 0.008)} Minutes Read
      </div>
      <h2
        style={{
          color: mode === true ? "#000" : "#FFF",
        }}
        className="my-3"
      >
        {text.length === 0 ? "Enter Something To Preview" : "Preview"}
      </h2>
      <p
        style={{
          color: mode === true ? "#000" : "#FFF",
        }}
        className="my-3 "
      >
        {text}
      </p>
    </>
  );
};

export default TextFrom;
