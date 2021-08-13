import Footer from './Footer';
import useDay from '../../../data/hooks/useDay';

const ConnectedFooter = () => {
	const day = useDay();
	// @TODO: use data from the day to figure out what the previous and next days are
	// and pass ids for those days into the footer so that
	const millisecondsInADay = 1000 * 60 * 60 * 24;
	const next = day.id + millisecondsInADay;
	const previous = day.id - millisecondsInADay;

	return (
		<Footer
			next={ next }
			previous={ previous }
		/>
	);
};

export default ConnectedFooter;