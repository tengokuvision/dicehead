import styles from './Button.module.scss'

const Button = ({ link, text }: { link: string; text?: string }) => {
	return (
		<a href={link} className={styles.button}>
			{text}
		</a>
	)
}

export default Button
