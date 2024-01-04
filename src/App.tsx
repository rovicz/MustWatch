import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./style.css";
import TopButton from "./Components/TopButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopButton />
      <Outlet />
    </div>
  );
}

export default App;
