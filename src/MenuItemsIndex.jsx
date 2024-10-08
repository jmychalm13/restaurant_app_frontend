import axios from "axios";
import { useState, useEffect } from "react";

export function MenuItemsIndex() {
  const [menuItems, setMenuItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] > 0 ? prevQuantities[itemId] - 1 : 0,
    }));
  };

  const handleGetMenuItems = () => {
    axios.get("http://localhost:3000/menu_items.json").then((response) => {
      setMenuItems(response.data);
    });
  };

  const handleSubmitOrder = () => {
    const items = menuItems
      .filter((item) => quantities[item.id] > 0)
      .map((item) => ({
        menu_item_id: item.id,
        quantity: quantities[item.id],
        unit_price: item.price,
      }));

    axios
      .post("http://localhost:3000/orders.json", { items })
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        console.log("Order created");
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  useEffect(handleGetMenuItems, []);

  return (
    <div>
      <h1>Create Order</h1>
      <div className="container p-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-4 border-b border-gray-200 ${
              !item.availability ? "text-gray-500" : "text-black"
            }`}
          >
            <span className="flex-1">
              {item.name} - ${item.price}
            </span>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleDecrement(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-l hover:bg-red-600"
              >
                -
              </button>
              <span className="px-4 py-1 text-gray-800">{quantities[item.id] || 0}</span>
              <button
                disabled={!item.availability}
                type="button"
                onClick={() => handleIncrement(item.id)}
                className="bg-green-500 text-white px-2 py-1 rounded-r hover:bg-green-600"
              >
                +
              </button>
            </div>
            {/* <p onClick={item.availability ? () => handleAddToOrderList(item) : null}>{item.name}</p>
            <p className="font-bold">${item.price}</p> */}
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
