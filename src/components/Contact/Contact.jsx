import { GrPhone, GrUser } from "react-icons/gr";
import { ContactInfo, Container, DeleteButton, Info } from "./Contact.styled";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <Container>
      <ContactInfo>
        <Info>
          <GrUser />
          {name}
        </Info>
        <Info>
          <GrPhone />
          {number}
        </Info>
      </ContactInfo>
      <DeleteButton className="contactDelBtn" onClick={() => onDelete(id)}>
        Delete
      </DeleteButton>
    </Container>
  );
};

export default Contact;
