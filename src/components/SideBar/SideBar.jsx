import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { getCategories } from "../../api";

export default function SideBar({ setPage }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  function handleChangePage() {
    setPage((prev) => prev + 1);
  }

  function handlePage(e) {
    e.stopPropagation();
    setPage(1);
  }

  return (
    <section className="sideBar">
      <h1>nws lab</h1>
      <nav>
        <ul className="navidationList">
          {categories.map((category) => {
            return (
              <li key={category.id} className="link" onClick={handlePage}>
                <Link to={`cat/${category.id}`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button onClick={() => handleChangePage()}>Load more</button>
    </section>
  );
}
