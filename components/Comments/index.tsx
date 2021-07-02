import { ChangeEventHandler } from 'react';
import Comments from './Comments';

interface Props {

};

const ConnectedComments = ({}: Props): JSX.Element => {
	const handleChange: ChangeEventHandler = () => {
		// send user input to redux
	};

	return (
		<Comments
			text={ '' }
			handleChange={ handleChange }
		/>
	);
};

export default ConnectedComments;
