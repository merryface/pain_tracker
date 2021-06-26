// keep it to just accepting props, limit the amount of logic. try to keep it so that it only displays logic (reusability and readability)
import styles from './Header.module.css';

const Footer = ({ date = new Date() }) => {

  const displayDate = date.toLocaleTimeString();
	
  return (
    <section className={ styles.header }>{ displayDate }</section>
  );
};

export default Footer;