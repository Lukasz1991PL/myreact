import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
const ColumnForm = (props) => {
  const [title, setValue] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setValue('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput
        type='text'
        title={title}
        onChange={(e) => setValue(e.target.value)}
      />
      <span>Icons:</span>
      <TextInput
        type='text'
        icon={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
