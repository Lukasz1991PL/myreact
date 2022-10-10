import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import { useParams } from 'react-router-dom';
const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();
  const { listId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, icon });
    dispatch(addColumn({ listId, title, icon }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput type='text' title={title} onChange={setTitle} />
      <span>Icons:</span>
      <TextInput type='text' icon={icon} onChange={setIcon} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
