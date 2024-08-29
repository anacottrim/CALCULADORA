import React from 'react';
import styles from './NotaInput.module.css';

interface NotaInputProps {
  valor: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NotaInput: React.FC<NotaInputProps> = ({ valor, onChange }) => {
  return <input className={styles.input} type="text" value={valor} onChange={onChange} />;
};

export default NotaInput;