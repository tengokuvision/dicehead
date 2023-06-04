import styles from './Header.module.scss'
import Logo from '../../assets/icons/dh-logo.svg'
import Login from '../../assets/icons/login.svg'
import Button from '../UI/Button/Button'

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<img src={Logo} className={styles.logo} alt='logo' />
				<a href='#about'>О нас</a>
				<a href='#news'>Новости</a>
				<a href='#masters'>Мастера</a>
				<a href='#socials'>Соцсети</a>
			</nav>
			<div className={styles.login__wrapper}>
				<a href='#' className={styles.login}>
					<span>Войти</span>
					<img src={Login} alt='login' />
				</a>
				<Button link='#' text='Создать аккаунт' />
			</div>
			<div className={styles.gradient}></div>
		</header>
	)
}

export default Header
