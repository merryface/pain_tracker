import React from 'react'
import styles from './score.module.scss';

interface Props {
	DayScore: number
};

const Score = ({ DayScore = 1 }: Props): JSX.Element => {
	const backgroundColour = `rgba(255, 021, 020, ${DayScore/5})`;

	return (
		<>
			<h2 className={ styles.title }>Today's Score</h2>

		<div className={ styles.container }>		
			<div className={ styles.scoreCard } style={{background: backgroundColour}}>
				<p>{ DayScore.toFixed(1) }</p>
			</div>
		</div>
		</>
	)
}

export default Score