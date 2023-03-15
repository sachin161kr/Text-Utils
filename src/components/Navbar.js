import { useState } from "react";

const Navbar = ({ mode, setMode, setAlertText, setShowAlert }) => {
  //const [mode, setMode] = useState(true);

  const [btnText, setBtnText] = useState("Dark Mode");

  return (
    <nav
      style={{
        backgroundColor: "#000",
      }}
      className={
        mode === true
          ? "navbar navbar-expand-lg navbar-light bg-light"
          : "navbar navbar-expand-lg navbar-dark"
      }
    >
      <a className="navbar-brand" href="/">
        TEXT-UTILS
      </a>
      <div style={{ flexGrow: 1 }}></div>
      <div className="custom-control custom-switch">
        <input
          onClick={() => {
            setMode(!mode);
            if (mode === true) {
              setBtnText("Light Mode");
              setAlertText("Dark Mode Enabled");
              setShowAlert(true);
              setInterval(() => {
                setShowAlert(false);
              }, 2500);
            } else {
              setBtnText("Dark Mode");
              setAlertText("Light Mode Enabled");
              setShowAlert(true);
              setInterval(() => {
                setShowAlert(false);
              }, 2500);
            }
          }}
          type="checkbox"
          class="custom-control-input"
          id="customSwitch1"
        />
        <label
          className={
            mode === true
              ? "custom-control-label text-black"
              : "custom-control-label text-white"
          }
          htmlFor="customSwitch1"
        >
          {btnText}
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
