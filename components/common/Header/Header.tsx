// keep it to just accepting props, limit the amount of logic. try to keep it so that it only displays logic (reusability and readability)
import style from './Header.module.css';

const Header = () => {
	
  return (
    <header className={ style.container }>
      <h1 className={ style.title }>Pain Tracking App</h1>
      <span className={ style.gear }>&#9881;</span>
    </header>
  );
};

export default Header;