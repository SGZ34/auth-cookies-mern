import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Register } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
