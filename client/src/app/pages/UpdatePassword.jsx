import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Password from "@mui/icons-material/Password";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../hooks";
import { Layout } from "../Layout";
import { updatePasswordSchema } from "../../schemas";

export const UpdatePassword = () => {
  const navigate = useNavigate();
  const { updatePassword } = useProfile();

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
              <Password />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit Password
            </Typography>

            <Formik
              initialValues={{
                password: "",
                newPassword: "",
                confirmPassword: "",
              }}
              validationSchema={updatePasswordSchema}
              onSubmit={({ password, newPassword, confirmPassword }) => {
                updatePassword({ password, newPassword, confirmPassword });
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
                    id="password"
                    name="password"
                    label="Old password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    margin="normal"
                    type="password"
                  />

                  <TextField
                    fullWidth
                    id="newPassword"
                    name="newPassword"
                    label="New password"
                    value={values.newPassword}
                    onChange={handleChange}
                    error={touched.newPassword && !!errors.newPassword}
                    helperText={touched.newPassword && errors.newPassword}
                    margin="normal"
                    type="password"
                  />

                  <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    error={touched.confirmPassword && !!errors.confirmPassword}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    margin="normal"
                    type="password"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isSubmitting}
                  >
                    Edit password
                  </Button>
                </Box>
              )}
            </Formik>
          </Box>
        </Card>
      </Container>
    </Layout>
  );
};
