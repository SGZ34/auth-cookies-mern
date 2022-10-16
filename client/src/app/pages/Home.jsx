import Typography from "@mui/material/Typography";

import { Layout } from "../Layout";
import { useAuth } from "../../hooks";
import Alert from "@mui/material/Alert";

export const Home = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <Alert variant="filled" severity="info">
        Bienvenido {user}
      </Alert>
    </Layout>
  );
};
