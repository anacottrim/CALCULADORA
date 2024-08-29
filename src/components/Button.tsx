import React from 'react';
import styles from './Button.module.css';


interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button className={styles.button} onClick={onClick}>Calcular</button>;
};

export default Button;