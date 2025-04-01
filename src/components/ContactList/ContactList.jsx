import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
