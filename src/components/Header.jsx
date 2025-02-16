import Button from "react-bootstrap/esm/Button";

const Header = ({ isAddContact, setIsAddContact }) => {
  return (
    <>
      <h1 className="text-center">Phone Book</h1>

      <div className="d-flex justify-content-between align-items-center mb-3">
        {!isAddContact ? (
          <h2 className="mb-0">Contacts</h2>
        ) : (
          <h2 className="mb-0">Add Contact</h2>
        )}
        {!isAddContact && (
          <Button variant="primary" onClick={() => setIsAddContact(true)}>
            <h2 className="mb-0">
              <i className="bi bi-plus"></i>
              Add new
            </h2>
          </Button>
        )}
      </div>
    </>
  );
};

export default Header;
