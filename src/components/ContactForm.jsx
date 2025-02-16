import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addContact } from "../../store/slices/contactsSlice";
import { useDispatch } from "react-redux";

const ContactForm = ({ setIsAddContact }) => {
  const dispatch = useDispatch();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      return imageUrl;
    }
  };

  return (
    <Formik
      initialValues={{
        id: Date.now(),
        name: "",
        number: "",
        position: "",
        src: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(addContact(values));
        setTimeout(() => {
          setSubmitting(false);
          setIsAddContact(false);
        }, 500);
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group className="mb-3" controlId="phoneBookName">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              name="name"
              type="text"
              required
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneBookNumber">
            <Form.Label>Phone Number: </Form.Label>
            <Form.Control
              name="number"
              type="number"
              required
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter phone number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneBookPosition">
            <Form.Label>Position: </Form.Label>
            <Form.Control
              name="position"
              type="text"
              required
              value={values.position}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter position"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>File: </Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="src"
              onChange={(e) => {
                const imageUrl = handleImageChange(e);
                values.src = imageUrl;
              }}
            />
          </Form.Group>
          <div className="d-flex gap-2">
            <Button type="submit" disabled={isSubmitting} variant="success">
              <h2 className="mb-0">Save</h2>
            </Button>

            <Button
              type="reset"
              disabled={isSubmitting}
              onClick={() => setIsAddContact(false)}
              variant="secondary"
            >
              <h2 className="mb-0">Cancel</h2>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
