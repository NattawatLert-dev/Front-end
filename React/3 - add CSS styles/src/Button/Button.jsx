
import styles from './Button.module.css'

function Button(){

    const style = {
        color: "white",
    }

    return(
        <>
        <button className={styles.button} style={style}>Click me</button>
        </>
    );

}

export default Button