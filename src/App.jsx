import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
