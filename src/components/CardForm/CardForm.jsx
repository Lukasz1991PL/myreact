import { useState } from 'react';
import Button from '../Button/Button';


const CardForm = ({ columnId, action }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: title }, columnId);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
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
