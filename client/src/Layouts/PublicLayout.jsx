import { useEffect } from "react";
import { Navbar } from "../components";

export const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">{children}</div>
    </>
  );
};
