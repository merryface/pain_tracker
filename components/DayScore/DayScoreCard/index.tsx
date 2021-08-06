import { useEffect, useState } from 'react';
import DayScoreCard from './DayScoreCard';
import useDay from '../../../data/hooks/useDay';
import throttle from '../../../data/utils/throttle';
interface Props {

};

const ConnectedDayScoreCard = ({ }: Props): JSX.Element => {
	const { treatments } = useDay();

	const [scrollingDown, setScrollingDown] = useState<boolean>(true);
	const [scrollPos, setScrollPos] = useState<number>(0);

	useEffect(() => {
		const scrollListener = throttle(() => {
			console.log('running');
			const currentYPosition = window.pageYOffset;
			setScrollPos((previousYPosition) => {
				if (previousYPosition < currentYPosition) {
					setScrollingDown(true);
				} else {
					setScrollingDown(false);
				}

				return currentYPosition;
			});
		});

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, [setScrollPos])

	const shouldShrink = scrollingDown && scrollPos > 64;

	return (
		<DayScoreCard
			treatments={ treatments }
			shouldShrink={ shouldShrink }
		/>
	);
};

export default ConnectedDayScoreCard;
