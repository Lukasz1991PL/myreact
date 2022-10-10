import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('fasdsa');
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput type='text' title={title} onChange={(e) => setTitle(e)} />
      <span>Description:</span>
      <TextInput
        type='text'
        description={description}
        onChange={(e) => setDescription(e)}
      />
      <Button handleClick={handleSubmit}>Add List</Button>
    </form>
  );
};

export default ListForm;
