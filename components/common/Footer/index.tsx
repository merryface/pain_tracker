import Footer from './Footer';
import useDay from '../../../data/hooks/useDay';

const ConnectedFooter = () => {
	const day = useDay();
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