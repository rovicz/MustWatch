import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [searcher, setSearcher] = React.useState("");

  return (
    <div className="navbar-box">
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie /> MoviesSearch
          </Link>
        </h2>
        <form className="navbar-form">
          <Input label="Searcher" setState={setSearcher} value={searcher} />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
