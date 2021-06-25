// keep it to just accepting props, limit the amount of logic. try to keep it so that it only displays logic (reusability and readability)
import styles from './Header.module.css';

const Header = ({ date = new Date() }) => {

  const displayDate = date.toLocaleTimeString();
	
  return (
    <section className={ styles.header }>{ displayDate }</section>
  );
};

export default Header;