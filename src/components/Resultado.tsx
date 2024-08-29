
import React from 'react';
import styles from './resultado.module.css';


interface ResultadoProps {
  media: number | null;
  mensagem: string;
}

const Resultado: React.FC<ResultadoProps> = ({ media, mensagem }) => {
  return (
    <div className={styles.resultadoContainer}>
      {media !== null && <p>Média: {media.toFixed(2)}</p>}
      <p>{mensagem}</p>
    </div>
  );
};

export default Resultado;