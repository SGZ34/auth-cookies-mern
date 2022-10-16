import { Routes, Route } from "react-router-dom";

import { EditProfile, Home, Users, Messages, UpdatePassword } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="messages" element={<Messages />} />
      <Route path="editprofile" element={<EditProfile />} />
      <Route path="updatePassword" element={<UpdatePassword />} />
    </Routes>
  );
};
