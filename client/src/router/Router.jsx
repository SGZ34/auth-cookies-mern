import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth";

import { Home, About, Contact } from "../home";
import { useAuth } from "../hooks";

import { AppRoutes } from "../app";

export const Router = () => {
  const { renewToken, status } = useAuth();

  useEffect(() => {
    renewToken();
  }, []);

  if (status === "checking") return <h1>Cargando</h1>;
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/auth/*"
          element={
            status === "not-auth" ? <AuthRoutes /> : <Navigate to="/app" />
          }
        />

        <Route
          path="/app/*"
          element={
            status === "auth" ? <AppRoutes /> : <Navigate to="/auth/login" />
          }
        />

        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
};
