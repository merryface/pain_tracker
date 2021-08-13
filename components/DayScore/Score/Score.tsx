import styles from './score.module.scss';

interface Props {
	dayScore: number,
	classes?: string[],
};

const Score = ({ dayScore = 1, classes = [] }: Props): JSX.Element => {
	const backgroundColour = `rgba(255, 021, 020, ${ dayScore / 5 })`;

	const allClassNames = [styles.container, ...classes];

	return (
		<div className={ allClassNames.join(' ') }>
			<div className={ styles.scoreCard } style={{background: backgroundColour}}>
				<p>{ dayScore === 0 ? "--" : dayScore.toFixed(1) }</p>
			</div>
		</div>
	)
}

export default Score
