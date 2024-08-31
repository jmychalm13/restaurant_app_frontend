import { Login } from "./Login";
import { OrdersIndex } from "./OrdersIndex";
import { MenuItemsIndex } from "./MenuItemsIndex";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MenuItemsIndex />} />
        <Route path="/orders" element={<OrdersIndex />} />
      </Routes>
    </div>
  );
}
