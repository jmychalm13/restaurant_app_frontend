import axios from "axios";
import { useState, useEffect } from "react";

export function MenuItemsIndex() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleGetMenuItems = () => {
    axios.get("http://localhost:3000/menu_items.json").then((response) => {
      console.log(response.data);
      setMenuItems(response.data);
    });
  };

  const handleAddToOrderList = (item) => {
    if (item.availability) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleSubmitOrder = () => {
    console.log("triggered");
  };

  useEffect(handleGetMenuItems, []);

  return (
    <div>
      <h1>Create Order</h1>
      <div className="container p-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between ${!item.availability ? "text-gray-500" : "text-black cursor-pointer"}`}
          >
            <p onClick={item.availability ? () => handleAddToOrderList(item) : null}>{item.name}</p>
            <p className="font-bold">${item.price}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center">
        <button type="submit" onClick={handleSubmitOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
