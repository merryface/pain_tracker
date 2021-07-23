import Footer from './Footer';
import useDay from '../../../data/hooks/useDay';

const ConnectedFooter = () => {
	const day = useDay();
	// @TODO: use data from the day to figure out what the previous and next days are
	// and pass ids for those days into the footer so that
	const next = 1;
	const previous = 0;

	return (
		<Footer
			next={ next }
			previous={ previous }
		/>
	);
};

export default ConnectedFooter;