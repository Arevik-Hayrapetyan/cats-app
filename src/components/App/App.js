import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import Heading from "../Heading/Heading";
import Grid from "../Grid/Grid";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <SideBar setPage={setPage} />
      <Routes>
        <Route path="/cat/:categoryId" element={<Grid page={page} />} />
        <Route path="*" element={<Heading />}></Route>
      </Routes>
    </div>
  );
}

export default App;
