import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContact, filterContact } from 'redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector(getFilteredContact);
  const onChangeFilter = event => {
    return dispatch(filterContact(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Enter name"
        value={filteredItems}
        onChange={onChangeFilter}
      />
    </Label>
  );
};
