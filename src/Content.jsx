import { Login } from "./Login";
import { OrdersIndex } from "./OrdersIndex";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <OrdersIndex />
    </div>
  );
}
