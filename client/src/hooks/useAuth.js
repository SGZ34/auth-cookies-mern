import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { onChecking, onLogin, onLogout } from "../store/slices";

export const useAuth = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startRegister = async ({ name, email, password, confirmPassword }) => {
    dispatch(onChecking());

    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      dispatch(onLogin(data.user));
    } catch (error) {
      dispatch(onLogout(error.response.data.errorMessage));
    }
  };

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });
      dispatch(onLogin(data.user));
    } catch (error) {
      dispatch(onLogout(error.response.data.errorMessage));
    }
  };

  const renewToken = async () => {
    dispatch(onChecking());

    try {
      const res = await api.get("/auth/renew");
      if (res.status === 204) return dispatch(onLogout());

      dispatch(onLogin(res.data.user));
    } catch (error) {
      dispatch(onLogout());
    }
  };

  const logout = async () => {
    try {
      await api.get("/auth/logout");
      dispatch(onLogout());
    } catch (error) {
      dispatch(onLogout());
    }
  };

  const getProfile = async () => {
    try {
      const { data } = await api.get("/auth/profile");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async ({ name, email }) => {
    try {
      const { data } = await api.post("/auth/updateProfile", { name, email });
      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    ...user,
    startRegister,
    startLogin,
    renewToken,
    logout,
    getProfile,
    updateProfile,
  };
};
