import axios from "axios";
import { useState, useEffect } from "react";

export function MenuItemsIndex() {
  const [menuItems, setMenuItems] = useState([]);

  const handleGetMenuItems = () => {
    axios.get("http://localhost:3000/menu_items.json").then((response) => {
      console.log(response.data);
      setMenuItems(response.data);
    });
  };

  useEffect(handleGetMenuItems, []);

  return (
    <div>
      <h1>Menu</h1>
      <div>
        {menuItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
