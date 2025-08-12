import styles from './listenNow.module.scss';

export default function ListenNow() {
	return (
		<div className={styles.listenNow}>
			<iframe
				data-testid="embed-iframe"
				src="https://open.spotify.com/embed/artist/42Ttiaydh8B6hBTJREVHBl?utm_source=generator&theme=0"
				width="100%"
				height="500px"
				frameBorder="0"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</div>
	);
}
