import styles from './Footer.module.css';

const Footer = (props: any) => {

  return (
    <footer className={ styles.container }>
      <span className={ styles.navButton } onClick={props.prevDay}>&#x2190; Prev</span> {/* left arrow */}
      <span className={ styles.navButton } onClick={props.historical}>Historical Data</span>
      <span className={ styles.navButton } onClick={props.nextDay}>Next &#x2192;</span> {/* right arrow */}
    </footer>
  );
};

export default Footer;