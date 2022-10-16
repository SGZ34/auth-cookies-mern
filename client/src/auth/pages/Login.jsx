import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

import { CardForm } from "../../components";
import { useAuth } from "../../hooks";
import { PublicLayout } from "../../Layouts";
import { loginSchema } from "../../schemas";

export const Login = () => {
  const navigate = useNavigate();

  const { startLogin } = useAuth();
  return (
    <PublicLayout>
      <CardForm title="Sign in">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={({ email, password }) => {
            startLogin({ email, password });
          }}
        >
          {({ isSubmitting, errors, handleSubmit, touched }) => (
            <Form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />

                {touched.email && errors.email ? (
                  <ErrorMessage
                    component="span"
                    className="invalid-feedback"
                    name="email"
                  />
                ) : null}
              </div>

              <div className="row mb-3">
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : null
                  }`}
                />

                {touched.password && errors.password ? (
                  <ErrorMessage
                    component="span"
                    className="invalid-feedback"
                    name="password"
                  />
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-100 mt-4"
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
      </CardForm>
    </PublicLayout>
  );
};
