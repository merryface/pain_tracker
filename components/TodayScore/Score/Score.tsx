import React from 'react'
import styles from './score.module.scss';

interface Props {
	todayScore: number
};

const Score = ({ todayScore = 1 }: Props): JSX.Element => {
	const backgroundColour = `rgba(255, 021, 020, ${todayScore/5})`;

	return (
		<>
			<h2 className={ styles.title }>Today's Score</h2>

		<div className={ styles.container }>		
			<div className={ styles.scoreCard } style={{background: backgroundColour}}>
				<p>{ todayScore.toFixed(1) }</p>
			</div>
		</div>
		</>
	)
}

export default Score
