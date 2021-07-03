import styles from './Rating.module.scss';
import { iRating, iScale } from '../../data/interfaces';

interface Props {
	current?: number|null,
	handleClick: ({}: iRating) => void,
	title: string,
};

const Rating = ({ title, current, handleClick }: Props): JSX.Element => {
	const buttons: iScale[] = [1, 2, 3, 4, 5];

	return (
		<fieldset className={ styles.fieldset }>
			<section className={ styles.container }>
				<h2 className={ styles.title }>{ title }</h2>

				<div className={ styles.buttonContainer }>
					{ buttons.map(number => (
						<button
							key={ number }
							className={ current === number ? styles.selected : styles.button }
							type='button'
							onClick={ () => handleClick({ rating: number, title }) }
						>{ number }</button>
					)) }
				</div>
			</section>
		</fieldset>
	);
};

export default Rating;
