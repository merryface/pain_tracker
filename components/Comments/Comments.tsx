import { ChangeEventHandler } from 'react';
import styles from './Comments.module.scss';

interface Props {
	text?: string
	handleChange: ChangeEventHandler<HTMLTextAreaElement>
};

const Comments = ({ text = '', handleChange }: Props): JSX.Element => {
	return (
		<div className={ styles.container }>
			<label htmlFor='comments'>Comments</label>
			<textarea
				id='comments'
				onChange={ handleChange }
				value={ text }
			/>
		</div>
	);

};

export default Comments;
