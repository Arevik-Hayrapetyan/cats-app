import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCatData } from "../../api";
import { nanoid } from "nanoid";
import "./Grid.css";
export default function Grid({ page }) {
  let { categoryId } = useParams();
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    getCatData(categoryId, page).then((data) =>
      page === 1 ? setCatData(data) : setCatData((prev) => [...prev, ...data])
    );
  }, [categoryId, page]);

  return (
    <section className="wrapper">
      {catData.length > 0 &&
        catData.map((cat) => {
          return (
            <div key={nanoid()} className="card">
              <img src={cat.url} alt="" />
            </div>
          );
        })}
    </section>
  );
}
