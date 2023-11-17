import styles from './ButtonContainer.module.css'
const ButtonContainer = ({ onButtonClick }) => {
    let buttons = ['C', "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "/", "=", ".", "0"]
    return (<div id={styles["buttons-container"]}>
        {buttons.map(item => (<button className={styles["button"]} onClick={() => onButtonClick(item)}>{item}</button>))}


    </div>
    );

}

export default ButtonContainer;