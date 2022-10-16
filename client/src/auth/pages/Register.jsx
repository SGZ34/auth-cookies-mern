import { Formik, Form, Field, ErrorMessage } from "formik";

import { CardForm } from "../../components";
import { useAuth } from "../../hooks";
import { PublicLayout } from "../../Layouts";
import { registerSchema } from "../../schemas";

export const Register = () => {
  const { startRegister } = useAuth();

  return (
    <PublicLayout>
      <CardForm title="Sign up">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerSchema}
          onSubmit={({ name, email, password, confirmPassword }) => {
            startRegister({ name, email, password, confirmPassword });
          }}
        >
          {({ isSubmitting, errors, handleSubmit, touched }) => (
            <Form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="email">Name</label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  className={`form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                  }`}
                />

                {touched.name && errors.name ? (
                  <ErrorMessage
                    component="span"
                    className="invalid-feedback"
                    name="name"
                  />
                ) : null}
              </div>

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
              <div className="row mb-3">
                <label htmlFor="confirmPassword">Confirm password</label>
                <Field
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  className={`form-control ${
                    touched.confirmPassword && errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                />

                {touched.confirmPassword && errors.confirmPassword ? (
                  <ErrorMessage
                    component="span"
                    className="invalid-feedback"
                    name="confirmPassword"
                  />
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-100 mt-4"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>
      </CardForm>
    </PublicLayout>
  );
};
