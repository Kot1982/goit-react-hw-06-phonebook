import { Item, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deletedContact } from 'redux/contactSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Item>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => dispatch(deletedContact(id))}>
          Delete
        </Button>
      </Item>
    </>
  );
};
