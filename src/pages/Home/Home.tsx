import Header from '../../components/Header/Header'
import styles from './Home.module.scss'
import Title from '../../assets/icons/dh-title.svg'
import LogoFiltered from '../../assets/icons/dh-logo-filtered.svg'
import CardSlider from '../../components/CardSlider/CardSlider'
import { motion } from 'framer-motion'
import NewsCard from '../../components/NewsCard/NewsCard'

const Home = () => {
	const opacityBlock = {
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, delay: 0.2 },
		},
		hidden: { y: 15, opacity: 0 },
	}

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const listItem = {
		hidden: { opacity: 0, y: 15 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.35,
			},
		},
	}

	const newsArr = [
		{
			heading: 'Название новости',
			desc: 'Здесь мы рассказываем что-то невероятно крутое и интересное, что обязательно заинтересует подписчиков, и они решат узнать побольше.',
		},
		{
			heading: 'Название новости',
			desc: 'Здесь мы рассказываем что-то невероятно крутое и интересное, что обязательно заинтересует подписчиков, и они решат узнать побольше.',
		},
		{
			heading: 'Название новости',
			desc: 'Здесь мы рассказываем что-то невероятно крутое и интересное, что обязательно заинтересует подписчиков, и они решат узнать побольше.',
		},
		{
			heading: 'Название новости',
			desc: 'Здесь мы рассказываем что-то невероятно крутое и интересное, что обязательно заинтересует подписчиков, и они решат узнать побольше.',
		},
		{
			heading: 'Название новости',
			desc: 'Здесь мы рассказываем что-то невероятно крутое и интересное, что обязательно заинтересует подписчиков, и они решат узнать побольше.',
		},
		{
			heading: 'Название новости',
			desc: 'Здесь мы рассказываем что-то невероятно крутое и интересное, что обязательно заинтересует подписчиков, и они решат узнать побольше.',
		},
	]

	return (
		<div className='container'>
			<Header />
			<main>
				<section className={styles.hero}>
					<div className={styles.title__wrapper}>
						<h3 className={styles.subtitle__logo}>
							<img src={LogoFiltered} alt='login' />
						</h3>
						<h3 className={styles.subtitle}>
							Место, где любят D&D и не только
						</h3>
						<div className={styles.glitch}>
							<img src={Title} className={styles.title} alt='dicehead' />
							<div className={styles.glitch__layers}>
								<div className={styles.glitch__layer} />
								<div className={styles.glitch__layer} />
								<div className={styles.glitch__layer} />
							</div>
						</div>
					</div>
					<div id={styles.dice1} />
					<div id={styles.dice2} />
					<div id={styles.dice3} />
					<div id={styles.dice4} />
				</section>
				<section className={styles.about}>
					<h3 className={styles.about__title}>01. Кто мы такие?</h3>

					<motion.div
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						variants={opacityBlock}
					>
						<CardSlider />
					</motion.div>
				</section>
				<section className={styles.news}>
					<h3 className={styles.about__title}>02. Что у нас нового?</h3>
					<motion.div
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						variants={container}
						className={styles.news__grid}
					>
						{newsArr.map(item => (
							<motion.div
								variants={listItem}
								key={item.heading}
								className={styles.news__card}
							>
								<NewsCard heading={item.heading} desc={item.desc} />
							</motion.div>
						))}
					</motion.div>
				</section>
				<section className={styles.news}>
					<h3 className={styles.about__title}>03. Наши мастера</h3>
				</section>
			</main>
		</div>
	)
}

export default Home
