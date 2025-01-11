import Contact from "../Contact/Contact";
import { List, ListItems } from "./ContactList.styled";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItems key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </ListItems>
      ))}
    </List>
  );
};

export default ContactList;
