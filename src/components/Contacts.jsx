import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { deleteContact } from "../../store/slices/contactsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ContactInfo from "./ContactInfo";

const Contacts = ({ id, name, number, src, position, searchTerm }) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const lowerText = text.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();
    const index = lowerText.indexOf(lowerSearch);

    if (index === -1) return text;

    return (
      <>
        {text.substring(0, index)}
        <mark>{text.substring(index, index + searchTerm.length)}</mark>
        {text.substring(index + searchTerm.length)}
      </>
    );
  };

  return (
    <>
      <ListGroup.Item className="mb-1 item" onClick={() => setModalShow(true)}>
        <div
          className="d-flex justify-content-between align-items-center"
          data-id={id}
        >
          <div className="d-flex align-items-center gap-3">
            <Image
              src={
                src || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              roundedCircle
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <div className="d-flex flex-column">
              <p style={{ margin: 0 }}>
                Name: {highlightText(name, searchTerm)}
              </p>
            </div>
          </div>

          <div className="d-flex gap-3">
            <a
              href={`tel:${number}`}
              onClick={(e) => e.stopPropagation()}
              className="btn btn-success d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            >
              <i className="bi bi-telephone-fill"></i>
            </a>

            <Button
              variant="danger"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteContact(id));
              }}
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </div>
        </div>
      </ListGroup.Item>
      <ContactInfo
        id={id}
        name={name}
        number={number}
        src={src || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        position={position}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Contacts;
