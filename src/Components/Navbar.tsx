import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [searcher, setSearcher] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!searcher) return;

    navigate(`/search?q=${searcher}`);
    setSearcher("");
  };

  return (
    <div className="navbar-box">
      <nav id="navbar">
        <h2>
          <Link to="/">
            <img src={logo} /> MustWatch
          </Link>
        </h2>
        <form onSubmit={handleSubmit} className="navbar-form">
          <Input label="Searcher" setState={setSearcher} value={searcher} />
          <button type="submit">
            <BiSearchAlt2 />
          </button>{" "}
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
