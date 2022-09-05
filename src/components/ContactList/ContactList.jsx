import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getContacts, getFilteredContact } from 'redux/contactSlice';

export const ContactList = () => {
  const contactItems = useSelector(getContacts);
  const filteredItems = useSelector(getFilteredContact);

  const currentContacts = contactItems.filter(el =>
    el.name.toLowerCase().includes(filteredItems.toLowerCase())
  );

  return (
    <ul>
      {currentContacts.map(({ name, number, id }) => {
        return (
          <ContactItem key={nanoid()} name={name} number={number} id={id} />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  currentContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
