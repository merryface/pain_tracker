import style from './Header.module.scss';

const Header = (props: any) => {

	return (
		<header className={ style.container }>
			<h1 className={ style.title }>Pain Tracking</h1>
			<span className={ style.gear } onClick={ props.handleClick }>&#9881;</span> {/* gear icon */ }
		</header>
	);
};

export default Header;

// Research how to pass props of function type in typescript to avoid using props