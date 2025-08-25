import styles from './carouselView.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/carousel_images/1.png'
import image2 from '../../../assets/carousel_images/2.png'
import image3 from '../../../assets/carousel_images/3.png'
import image4 from '../../../assets/carousel_images/4.png'
import video from '../../../assets/bg_video.mp4'

export default function CarouselView() {
	return (
		<div className={styles.carousel}>
			<Carousel  className={styles.internalCarousel}  showStatus={false}  infiniteLoop showThumbs={false} >
				<div className={styles.wrapperItem}>
					<img src={image1} />
				</div>
				<div className={styles.wrapperItem}>
					<img src={image2} />
				</div>
				<div className={styles.wrapperItem}>
					<img src={image3} />
				</div>
				<div className={styles.wrapperItem}>
					<img src={image4} />
				</div>
				<div className={styles.wrapperItem}>
					<video src={video} controls />
				</div>
			</Carousel>
		</div>
	);
}
