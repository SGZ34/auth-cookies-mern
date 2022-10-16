import { useDispatch } from "react-redux";
import { api } from "../api";
import { onLogin, onLogout } from "../store/slices";

export const useProfile = () => {
  const dispatch = useDispatch();

  const getProfile = async () => {
    try {
      const { data } = await api.get("/profile");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async ({ name, email }) => {
    try {
      const { data } = await api.put("/profile/updateProfile", { name, email });
      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
    }
  };

  const updatePassword = async ({ password, newPassword, confirmPassword }) => {
    try {
      await api.put("/profile/updatePassword", {
        password,
        newPassword,
        confirmPassword,
      });

      await api.get("/auth/logout");
      dispatch(onLogout());
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getProfile,
    updateProfile,
    updatePassword,
  };
};
