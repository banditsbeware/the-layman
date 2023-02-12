
import styles from './Button.module.css'

export function Button({ buttonText }) {
    return (
        <button
            type="button"
            className={styles.generic}
        >
            { buttonText ? buttonText : "Button" }
        </button>
    )
}
