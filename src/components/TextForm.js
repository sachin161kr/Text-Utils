import { useState } from "react";

const TextFrom = ({ mode, setMode }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="form-group">
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          style={{
            background: mode == true ? "#FFF" : "#1f1e1e",
            color: mode == true ? "#000" : "#fff",
          }}
          value={text}
          className="form-control"
          id="myBox"
          rows="6"
          placeholder="Enter Text Here!!"
        ></textarea>
        <button
          onClick={() => {
            setText(text.toUpperCase());
          }}
          className="btn btn-primary m-3"
        >
          Convert To Uppercase
        </button>
        <button
          onClick={() => {
            setText(text.toLowerCase());
          }}
          className="btn btn-primary m-3"
        >
          Convert To Lowercase
        </button>
        <button
          onClick={() => {
            setText("");
          }}
          className="btn btn-primary m-3"
        >
          Clear Text
        </button>
      </div>
      <h2
        style={{
          color: mode == true ? "#000" : "#FFF",
        }}
      >
        Text Summary
      </h2>
      {text.length == 0 ? (
        <p
          style={{
            color: mode == true ? "#000" : "#FFF",
          }}
        >
          Total Words = 0{" "}
        </p>
      ) : (
        <p
          style={{
            color: mode == true ? "#000" : "#FFF",
          }}
        >
          Total Words = {text.split(" ").length}{" "}
        </p>
      )}
      <div
        style={{
          color: mode == true ? "#000" : "#FFF",
        }}
      >
        Total Characters = {text.length}{" "}
      </div>
      <div
        style={{
          color: mode == true ? "#000" : "#FFF",
        }}
        className="my-3"
      >
        {Math.round(text.split(" ").length * 0.008)} Minutes Read
      </div>
      <h2
        style={{
          color: mode == true ? "#000" : "#FFF",
        }}
        className="my-3"
      >
        Preview
      </h2>
      <p
        style={{
          color: mode == true ? "#000" : "#FFF",
        }}
        className="my-3 "
      >
        {text}
      </p>
    </>
  );
};

export default TextFrom;
