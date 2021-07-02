import Header from './Header';
// import getData from 'somewhere';

const ConnectedHeader = () => {
	return (
		<Header
			handleClick={ () => console.log("gear clicked!") }
		/>
	);
};

export default ConnectedHeader;