import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: value });
    console.log('value', value);
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder='Search...' value={value} onChange={setValue} />
      <Button>
        Search
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
