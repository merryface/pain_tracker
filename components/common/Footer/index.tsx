import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { previousDay } from '../../../data/reducer';
import {previousPage} from '../../../data/reducers/previousPageReducer';

interface Props {
	handleClick: ({}: any) => void,
};

const ConnectedFooter = () => {
	const day = useSelector(previousDay);
	const dispatch = useDispatch();

	const handleClickPrevious = ({ currentDay }: any) => {
		dispatch(previousPage({
			rating,
			title
		}))
	};
	
	return (
		<Footer
			historical={ () => console.log("historical clicked!") }
			prevDay={ () => {
				console.log("Prev clicked!")
				
			}}
			nextDay={ () => console.log("Next clicked!") }
		/>
	);
};

export default ConnectedFooter;