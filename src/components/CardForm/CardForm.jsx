import { useState } from 'react';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
const CardForm = ({ columnId, action }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
  };
  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
