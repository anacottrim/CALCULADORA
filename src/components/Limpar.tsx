import React from 'react';
import styles from './Button.module.css';

interface LimparProps {
  onClick: () => void;
}

const Limpar: React.FC<LimparProps> = ({ onClick }) => {
  return <button className={styles.button} onClick={onClick}>Limpar</button>;
};

export default Limpar;