import { Button } from './Button.js'
import styles from './Header.module.css'

export function Header({ title }) {
    return (
        <div className={styles.header}>
            <h1>{title ? title : "default title"}</h1>
            <Button buttonText="Log In"/>
            <Button buttonText="Sign Up"/>
        </div>
    )
}
