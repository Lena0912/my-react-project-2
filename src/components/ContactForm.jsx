import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,

    });
    resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(25, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^(\+?\d{1,4}[-\s.]?)?(\(?\d{1,3}\)?[-\s.]?)?(\d{1,4}[-\s.]?){1,3}$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          {errors.name && touched.name && <div>{errors.name}</div>}
          <label htmlFor="number">Number</label>
          <Field type="tel" name="number" id="number" />
          {errors.number && touched.number && <div>{errors.number}</div>}
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
