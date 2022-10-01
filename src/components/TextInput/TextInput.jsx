import styles from './TextInput.module.scss';

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type='text'
    />
  );
};

export default TextInput;
