import styles from './footer.module.scss';
import { openInNewTab } from '../../Services/OpenInNewTab';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<span>MC Akilo© - Todos os direitos reservados</span>
			<span onClick={()=>openInNewTab("https://github.com/gwtovitor")} className={styles.github}>
				Desenvolvido por - gwtovitor{' '}
				<img
					src="https://cdn.simpleicons.org/github/fff
"
				/>
			</span>
		</div>
	);
}
