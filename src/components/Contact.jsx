
const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <p className="contactName">{name}</p>
      <p className="contactName">{number}</p>
      <button className="contactDelBtn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};




export default Contact;
