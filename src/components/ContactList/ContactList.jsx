import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts = contacts.filter((contact) => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.trim().toLocaleLowerCase());
  });

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
