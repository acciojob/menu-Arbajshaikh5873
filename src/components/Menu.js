import React from "react";

function Menu({ items }) {
  return (
    <div className="menu">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category}`}
        >
          <img src={item.image} alt={item.name} />
          <div className="menu-info">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
