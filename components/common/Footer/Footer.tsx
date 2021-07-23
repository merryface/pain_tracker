import Link from 'next/link';
import styles from './Footer.module.scss';

interface Props {
	next: number,
	previous: number,
};

const Footer = ({ next, previous }: Props) => {
	return (
		<footer className={ styles.container }>
			<Link href={ `/${ previous }` }>
				<a className={ styles.navButton }>&#x2190; {/* left arrow */ } Prev</a>
			</Link>

			<Link href='/'>
				<a className={ styles.navButton }>Historical Data</a>
			</Link>

			<Link href={ `/${ next }` }>
				<a className={ styles.navButton }>Next {/* right arrow */ } &#x2192;</a>
			</Link>
		</footer>
	);
};

export default Footer;