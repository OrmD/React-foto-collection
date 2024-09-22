import React, { useEffect, useState } from "react";

import "./index.scss";
import { Collection } from "./Collections";
import ModalWindows from "./Modal/modal";

const cats = [
  { name: "Все" },
  { name: "Море" },
  { name: "Горы" },
  { name: "Архитектура" },
  { name: "Города" },
];
function App() {
  const [modalActive, setModalActive] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);
  const [srcName, setSrcName] = useState("");
  const handleClick = (name) => {
    setSrcName(name);
    console.log(name);
  };

  useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : "";

    fetch(
      `https://66e1e723c831c8811b56ac40.mockapi.io/PhotosColection?page=${page}&limit=4&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
        console.log(collections);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отриманні данних");
      });
  }, [categoryId, page]);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {collections
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, index) => (
            <Collection
              onChange={handleClick}
              setActive={setModalActive}
              key={index}
              name={obj.name}
              images={obj.photos}
            />
          ))}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <ModalWindows
        srcName={srcName}
        active={modalActive}
        setActive={setModalActive}
      ></ModalWindows>
    </div>
  );
}

export default App;
