import { useEffect, useState } from 'react';
import DayScoreCard from './DayScoreCard';
import useDay from '../../../data/hooks/useDay';

const ConnectedDayScoreCard = (): JSX.Element => {
	const { treatments, id } = useDay();

	const [scrollingDown, setScrollingDown] = useState<boolean>(true);
	const [scrollPos, setScrollPos] = useState<number>(0);

	useEffect(() => {
		const scrollListener = () => {

			const currentYPosition = window.pageYOffset;

			console.log(currentYPosition);

			setScrollPos((previousYPosition) => {
				if (previousYPosition < currentYPosition) {
					setScrollingDown(true);
				} else {
					setScrollingDown(false);
				}

				return currentYPosition;
			});
		};

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, [setScrollPos])

	const pastHeader = scrollPos > 64;
	const shouldShrink = scrollingDown && pastHeader;

	return (
		<DayScoreCard
			treatments={ treatments }
			id={ id }
			shouldShrink={ shouldShrink }
			pastHeader={ pastHeader }
		/>
	);
};

export default ConnectedDayScoreCard;
