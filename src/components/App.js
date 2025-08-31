import React, { useState } from "react";
import Menu from "./Menu";

function App() {
  const allMenuItems = [
    {
      id: 1,
      name: "Pancakes",
      category: "breakfast",
      price: "$5.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Burger",
      category: "lunch",
      price: "$8.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Milkshake",
      category: "shakes",
      price: "$3.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Omelette",
      category: "breakfast",
      price: "$4.50",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Pizza",
      category: "lunch",
      price: "$10.00",
      image: "https://via.placeholder.com/150",
    },
  ];
  const [menuItems, setMenuItems] = useState(allMenuItems);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(allMenuItems);
    } else {
      setMenuItems(allMenuItems.filter((item) => item.category === category));
    }
  };

  return (
    <div id="main" className="container">
      <h1>Menu</h1>

      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
          Shakes
        </button>
        <button onClick={() => filterItems("all")}>All</button>
      </div>

      <Menu items={menuItems} />
    </div>
  );
}

export default App;
