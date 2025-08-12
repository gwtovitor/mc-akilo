import CarouselView from '../../components/View/CarouselView/CarouselView';
import MainView from '../../components/View/MainView/MainView';
import Navbar from '../../components/Navbar/Navbar';
import styles from './homePage.module.scss';
import Divisor from '../../components/Divisor/Divisor';
import ListenNow from '../../components/View/ListenNow/ListenNow';
import Story from '../../components/View/Story/Story';
import Contact from '../../components/View/SocialNetworks/SocialNetworks';
import Footer from '../../components/View/Footer/Footer';
import { useRef, useCallback } from 'react';

export default function HomePage() {
	const refs = {
		galeria: useRef(null),
		oucaAgora: useRef(null),
		historia: useRef(null),
		contato: useRef(null),
	};

	const scrollTo = useCallback((key) => {
		const el = refs[key]?.current;
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// Se o header for fixo e cobrir o topo, duas opções:
		// 1) CSS: .section { scroll-margin-top: 80px; }  (recomendado)
		// 2) JS: window.scrollBy({ top: -80, behavior: "instant" });
	}, []);

	return (
		<div className={styles.homePage}>
			<Navbar onGo={scrollTo} />
			<MainView />

			<section ref={refs.galeria} className={styles.section}>
				<Divisor name="GALERIA" />
				<CarouselView />
			</section>

			<section ref={refs.oucaAgora} className={styles.section}>
				<Divisor name="OUÇA AGORA" />
				<ListenNow />
			</section>

			<section ref={refs.historia} className={styles.section}>
				<Divisor name="HISTÓRIA" />
				<Story />
			</section>

			<section ref={refs.contato} className={styles.section}>
				<Divisor name="CONTATO" />
				<Contact />
			</section>

			<Footer />
		</div>
	);
}
