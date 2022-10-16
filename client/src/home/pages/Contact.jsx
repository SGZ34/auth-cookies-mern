import { Formik, Form, Field, ErrorMessage } from "formik";

import { CardForm } from "../../components";
import { PublicLayout } from "../../Layouts";
import { contactSchema } from "../../schemas";

export const Contact = () => {
  return (
    <PublicLayout>
      <h1>Contact page</h1>
      <CardForm title="Send message">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={contactSchema}
          onSubmit={({ name, email, message }) => {
            console.log(name, email, message);
          }}
        >
          {({ isSubmitting, errors, handleSubmit, touched }) => (
            <Form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="message">Message</label>
                <Field
                  id="message"
                  component="textarea"
                  rows="4"
                  style={{ resize: "none" }}
                  name="message"
                  className={`form-control ${
                    touched.message && errors.message ? "is-invalid" : null
                  }`}
                />

                {touched.message && errors.message ? (
                  <ErrorMessage
                    component="span"
                    className="invalid-feedback"
                    name="message"
                  />
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-100 mt-4"
              >
                Send message
              </button>
            </Form>
          )}
        </Formik>
      </CardForm>
    </PublicLayout>
  );
};
