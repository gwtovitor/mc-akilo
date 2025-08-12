import styles from './mainView.module.scss';
import videoBg from '../../../assets/bg_video.mp4';
import logo from '../../../assets/logo.png';
import { openInNewTab } from '../../Services/OpenInNewTab';
export default function MainView() {
	return (
		<div className={styles.mainView}>
			<VideoBG />
			<div className={styles.wrapper}>
				<img src={logo}/>
                <span>Ouça agora o hit "Festa de Agosto"</span>
				<button onClick={()=>{openInNewTab("https://open.spotify.com/intl-pt/track/5kON9NMcKWD5zE0HVkErPd")}} ><img src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'/>Ouvir</button>
			</div>
		</div>
	);
}

function VideoBG() {
	return (
		<div className={styles.bgVideo}>
			<div className={styles.backdrop}></div>
			<video src={videoBg} autoPlay loop muted />
		</div>
	);
}
