import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { deleteContact } from "../../store/slices/contactsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ContactInfo from "./ContactInfo";

const Contacts = ({ id, name, number, src, position, searchTerm, index }) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const insertMark = (str, pos, len) => {
    return (
      str.slice(0, pos) +
      "<mark>" +
      str.slice(pos, pos + len) +
      "</mark>" +
      str.slice(pos + len)
    );
  };

  const part = searchTerm
    ? insertMark(
        name,
        name.toLowerCase().indexOf(searchTerm.toLowerCase()),
        searchTerm.length
      )
    : name;
  return (
    <>
      <ListGroup.Item className="mb-1 item" onClick={() => setModalShow(true)}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <Image
              src={
                src || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              roundedCircle
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <div className="d-flex flex-column">
              <p
                style={{ margin: 0 }}
                dangerouslySetInnerHTML={{ __html: `Name: ${part}` }}
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <Button
              variant="success"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = `tel:${number}`;
              }}
            >
              <i className="bi bi-telephone-fill"></i>
            </Button>

            <Button
              variant="danger"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteContact(id));
              }}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </div>
        </div>
      </ListGroup.Item>
      <ContactInfo
        index={index}
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
