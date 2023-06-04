import styles from './CardSlider.module.scss'
import Photo from '../../assets/images/vanya_1.jpg'
import Logo from '../../assets/icons/dh-logo.svg'
import Switch from '../../assets/icons/next-round.svg'

const CardSlider = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.description}>
				<span className={styles.description__title}>
					<span> Любители НРИ</span>
					<br />
					<span>и просто хорошие ребята</span>
				</span>
				<span className='mb-8'>
					Какая-то полезная информация о мастере, какой он весь из себя крутой и
					все такое, ляляля, я не знаю, что еще написать, а блок надо заполнить,
					так что напишу просто еще раз про то, что все люди булочки, а я жаба,
					вот такое вот выпадение из социума, не такая как все и что вы мне
					сделаете, я в другом городе. В общем говорим обо всем хорошем, о
					плохом напишут игроки.
				</span>
				<div className={styles.footer}>
					<div className={styles.imgWrapper}>
						<img src={Logo} alt='logo' />
						<span className={styles.logo}>Dicehead</span>
					</div>
					<div className={styles.controls}>
						<img src={Switch} alt='logo' />
						<img
							src={Switch}
							alt='logo'
							style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
						/>
					</div>
				</div>
				<div className={styles.bgLight} />
			</div>
			<div className={styles.photo}>
				<img src={Photo} alt='ivan' />
			</div>
		</div>
	)
}

export default CardSlider
