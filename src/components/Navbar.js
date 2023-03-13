import { useState } from "react";

const Navbar = ({ mode, setMode }) => {
  //const [mode, setMode] = useState(true);

  const [btnText, setBtnText] = useState("Dark Mode");

  return (
    <nav
      className={
        mode == true
          ? "navbar navbar-expand-lg navbar-light bg-light"
          : "navbar navbar-expand-lg navbar-dark bg-dark"
      }
    >
      <a className="navbar-brand" href="/">
        TEXT-UTILS
      </a>
      <div style={{ flexGrow: 1 }}></div>
      <button
        onClick={() => {
          setMode(!mode);
          if (mode == true) {
            setBtnText("Light Mode");
          } else {
            setBtnText("Dark Mode");
          }
        }}
        className="btn btn-primary my-2 my-sm-0"
        type="submit"
      >
        {btnText}
      </button>
    </nav>
  );
};

export default Navbar;
