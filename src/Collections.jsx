import { useState } from "react";

export function Collection({ name, images, setActive, onChange }) {
  const handleClick = (event) => {
    setActive(true);
    onChange(event.target.src);
  };

  return (
    <div className="collection">
      <img
        className="collection__big"
        src={images[0]}
        alt="Item"
        onClick={handleClick}
      />
      <div className="collection__bottom">
        <img
          className="collection__mini"
          src={images[1]}
          alt="Item"
          onClick={handleClick}
        />
        <img
          className="collection__mini"
          src={images[2]}
          alt="Item"
          onClick={handleClick}
        />
        <img
          className="collection__mini"
          src={images[3]}
          alt="Item"
          onClick={handleClick}
        />
      </div>
      <h4>{name}</h4>
    </div>
  );
}
