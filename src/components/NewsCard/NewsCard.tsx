import Button from '../UI/Button/Button'
import styles from './NewsCard.module.scss'

interface IProps {
	heading: string
	desc: string
}

const NewsCard: React.FC<IProps> = ({ heading, desc }) => {
	return (
		<>
			<h4 className={styles.heading}>{heading}</h4>
			<span className='text-secondary'>{desc}</span>
			<Button link='123' text='Подробнее' />
			{/* <div className='bgLight'></div> */}
		</>
	)
}

export default NewsCard
