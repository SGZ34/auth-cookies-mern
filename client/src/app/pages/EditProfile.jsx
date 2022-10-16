import { useEffect, useState } from "react";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Info from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useProfile } from "../../hooks";
import { Layout } from "../Layout";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
  const [isValueLoaded, setIsValueLoaded] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  const { getProfile, updateProfile } = useProfile();

  useEffect(() => {
    (async () => {
      const data = await getProfile();
      setUser({
        ...user,
        name: data.name,
        email: data.email,
      });
      setIsValueLoaded(true);
    })();
  }, []);

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Card variant="outlined" sx={{ padding: 2, marginTop: 20 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <Info />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit profile
            </Typography>

            {!isValueLoaded ? (
              <></>
            ) : (
              <Formik
                initialValues={{ name: user.name, email: user.email }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .min(3)
                    .max(200)
                    .required()
                    .label("El nombre"),
                  email: Yup.string()
                    .email()
                    .min(10)
                    .max(200)
                    .required()
                    .label("El correo"),
                })}
                onSubmit={({ name, email }) => {
                  updateProfile({ name, email });
                  navigate("/app");
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors,
                  touched,
                  isSubmitting,
                }) => (
                  <Box sx={{ mt: 1 }} component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                      margin="normal"
                    />

                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      margin="normal"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={isSubmitting}
                    >
                      Edit profile
                    </Button>
                  </Box>
                )}
              </Formik>
            )}
          </Box>
        </Card>
      </Container>
    </Layout>
  );
};
