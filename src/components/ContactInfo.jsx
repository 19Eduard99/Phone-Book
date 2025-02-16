import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/esm/Image";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";

const ContactInfo = (props) => {
  const { name, number, src, position, onHide, index } = props;

  const navigate = useNavigate();
  const redirect = () => navigate("/edit-contact/" + Number(index + 1));

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Name: {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image
                src={src}
                roundedCircle
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </Col>
            <Col>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Phone: {number}
              </p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Position: {position}
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "space-between" }}>
        <Button
          variant="success"
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = `tel:${number}`;
          }}
        >
          Call
        </Button>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="warning" onClick={redirect}>
            Edit
          </Button>
          <Button variant="danger" onClick={onHide}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactInfo;
