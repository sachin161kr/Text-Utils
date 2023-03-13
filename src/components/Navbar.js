import { useState } from "react";

const Navbar = ({ mode, setMode }) => {
  //const [mode, setMode] = useState(true);

  const [btnText, setBtnText] = useState("Dark Mode");

  return (
    <nav
      style={{
        backgroundColor: "#000",
      }}
      className={
        mode == true
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
            if (mode == true) {
              setBtnText("Light Mode");
            } else {
              setBtnText("Dark Mode");
            }
          }}
          type="checkbox"
          class="custom-control-input"
          id="customSwitch1"
        />
        <label
          className={
            mode == true
              ? "custom-control-label text-black"
              : "custom-control-label text-white"
          }
          htmlFor="customSwitch1"
        >
          Light Mode
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
