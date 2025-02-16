import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { useState } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import Search from "./Search";
import Header from "./Header";
const HomePage = () => {
  const { contacts, filteredContacts, searchTerm } = useSelector(
    (state) => state.contacts
  );
  const [isAddContact, setIsAddContact] = useState(false);
  const contactsToDisplay =
    filteredContacts.length > 0 ? filteredContacts : contacts;
  const shouldShowNoResults =
    searchTerm !== "" && filteredContacts.length === 0;

  return (
    <Container>
      <Header isAddContact={isAddContact} setIsAddContact={setIsAddContact} />

      {!isAddContact && <Search />}
      <ListGroup>
        {isAddContact ? (
          <ContactForm setIsAddContact={setIsAddContact} />
        ) : (
          <>
            {contactsToDisplay.length === 0 || shouldShowNoResults ? (
              <h1 className="text-center">No contacts found</h1>
            ) : (
              contactsToDisplay.map((contact, index) => (
                <Contacts
                  index={index}
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  src={contact.src}
                  position={contact.position}
                  searchTerm={searchTerm}
                />
              ))
            )}
          </>
        )}
      </ListGroup>
    </Container>
  );
};

export default HomePage;
