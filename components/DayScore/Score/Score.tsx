import styles from './score.module.scss';

interface Props {
	dayScore: number
};

const Score = ({ dayScore = 1 }: Props): JSX.Element => {
	const backgroundColour = `rgba(255, 021, 020, ${dayScore/5})`;

	return (
		<div>
		<div className={ styles.container }>		
			<div className={ styles.scoreCard } style={{background: backgroundColour}}>
				<p>{ dayScore === 0 ? "--" : dayScore.toFixed(1) }</p>
			</div>
		</div>
		</div>
	)
}

export default Score
