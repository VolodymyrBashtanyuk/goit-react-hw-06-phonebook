import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './FilterContact/FilterContact';
import { ContactList } from './ContactList/ContactList';
import { Title, SubTitle } from './AppStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { addContactItem } from '../redux/contactsSlice';
import { filterContacts } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const isDublicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const addContacts = data => {
    if (isDublicate(data)) {
      return alert(`${data.name} is already in contacts `);
    }
    dispatch(addContactItem(data));
  };

  const filterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

  const getFilters = () => {
    if (!filter) {
      return contacts;
    }
    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onAddContacs={addContacts} />
      {contacts.length !== 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <Filter onChange={filterChange} value={filter} />
          <ContactList items={getFilters()} />
        </>
      )}
    </>
  );
};
