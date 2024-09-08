import axios from "axios";
import { useState, useEffect } from "react";

export function OrdersIndex() {
  const [orders, setOrders] = useState([]);

  const handleGetOrders = () => {
    axios.get("http://localhost:3000/orders.json").then((response) => {
      console.log(response.data);
      setOrders(response.data);
    });
  };

  useEffect(handleGetOrders, []);

  return (
    <div>
      <h1>All Orders</h1>
      <div>
        {orders.map((order) => (
          <div key={order.id}>
            <p>{order.total_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
