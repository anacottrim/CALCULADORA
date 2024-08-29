import { useState } from "react"; 
import Button from './components/Button';
import Limpar from './components/Limpar';
import Resultado from './components/Resultado';
import NotaInput from './components/NotaInput';
import styles from './App.module.css';


export function App() {
  const [notaAv1, setNotaAv1] = useState<number | string>('');
  const [notaAv2, setNotaAv2] = useState<number | string>('');
  const [media, setMedia] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState<string>('');

  const calcularMedia = () => {
    const av1 = parseFloat(notaAv1 as string);
    const av2 = parseFloat(notaAv2 as string);

    if (isNaN(av1) || isNaN(av2)) {
      setMensagem('Por favor, insira notas válidas.');
      return;
    }

    const mediaCalculada = (av1 + av2) / 2;
    setMedia(mediaCalculada);

    if (mediaCalculada >= 7) {
      setMensagem('Aprovado!');
    } else if (mediaCalculada >= 5 && mediaCalculada < 7) {
      setMensagem('Prova final!');
    } else {
      setMensagem('Reprovado.');
    }
  };

  const limparCampos = () => {
    setNotaAv1('');
    setNotaAv2('');
    setMedia(null);
    setMensagem('');
  };

  return (
    <div className={styles.pageBackground}>
    <div className={styles.container}>
      <h1  className={styles.centeredText}>Calcule sua média</h1>
      <h2 className={styles.centeredText}>AV1</h2>
      <NotaInput valor={notaAv1} onChange={(e) => setNotaAv1(e.target.value)} />
      <h2 className={styles.centeredText}>AV2</h2>
      <NotaInput valor={notaAv2} onChange={(e) => setNotaAv2(e.target.value)} />
        <div  className={styles.centeredText}>
      <Button onClick={calcularMedia}></Button>
      <Limpar onClick={limparCampos} />
        </div>
      <Resultado media={media} mensagem={mensagem} />
    </div>
    </div>
  );
}
export default App;
