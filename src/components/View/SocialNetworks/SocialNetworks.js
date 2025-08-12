import styles from './socialNetworks.module.scss';
import { openInNewTab } from '../../Services/OpenInNewTab';

export default function SocialNetworks() {
	return (
		<div className={styles.contact}>
			<NetworkItem
				image="https://cdn.simpleicons.org/instagram"
				value="https://www.instagram.com/mcakilooficiall/"
				title={'Instagram'}
			/>
			<NetworkItem
				image="https://cdn.simpleicons.org/spotify"
				value="https://open.spotify.com/intl-pt/artist/42Ttiaydh8B6hBTJREVHBl"
				title={'Spotfy'}
			/>
			<NetworkItem
				image="https://cdn.simpleicons.org/whatsapp"
				value="https://wa.link/gd29x6"
				title={'Whatsapp'}
			/>
		</div>
	);
}

function NetworkItem({ image, value, title }) {
	return (
		<div onClick={() => openInNewTab(value)} className={styles.contactItem}>
			<img src={image} />
			<span>{title}</span>
		</div>
	);
}
