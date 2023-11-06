import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const Navbar = () => {
  const [searcher, setSearcher] = React.useState("");

  return (
    <div className="container">
      <nav id="navbar">
        <h2>
          <Link to="/">MoviesSearch</Link>
        </h2>
        <form>
          <Input label="searcher" setState={setSearcher} value={searcher} />
          <p>{searcher}</p>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
