import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import ColumnForm from '../ColumnForm/ColumnForm';

const CardForm = ({ title, columnID, action }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: title }, columnID);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default ColumnForm;
