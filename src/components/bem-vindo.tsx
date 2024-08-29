import styles from "./bem-vindo.module.css";
interface Props{
    nome: string;
}
export function BemVindo({nome} : Props){
    return (
        <h1 className={styles.container}> 😶‍🌫️ Bem Vindo, {nome}</h1>
    )
}