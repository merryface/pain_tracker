import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { previousPage, currentDay } from '../../../data/reducer';
import { iState } from '../../../data/interfaces';

const ConnectedFooter = () => {
	const day = useSelector(currentDay);
	const dispatch = useDispatch();

	const handleClickPrevious = ({ currentDay }: iState) => {
		dispatch(previousPage(currentDay));
	};
	
	return (
		<Footer
			historical={ () => console.log("historical clicked!") }
			prevDay={ () => {
				console.log("Prev clicked!")
				handleClickPrevious
			}}
			nextDay={ () => console.log("Next clicked!") }
		/>
	);
};

export default ConnectedFooter;