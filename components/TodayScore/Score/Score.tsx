import React from 'react'
import styles from './score.module.scss';


const Score = ({}) => {
	const score = 3;
	const backgroundColour = `rgba(255, 021, 020, ${score/5})`;

	return (
		<>
			<h2 className={ styles.title }>Today's Score</h2>

		<div className={ styles.container }>		
			<div className={ styles.scoreCard } style={{background: backgroundColour}}>
				<p>{ score }</p>
			</div>
		</div>
		</>
	)
}

export default Score
