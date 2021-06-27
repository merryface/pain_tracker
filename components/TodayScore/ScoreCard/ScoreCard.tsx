import style from './ScoreCard.module.css';

const ScoreCard = (props: any) => {
  const backgroundColour = "rgba(255,0,0, " + (props.scoreAverage <= 2 ? 0.2 : props.scoreAverage/5) + ")";
  const score = props.scoreAverage === 0 ? 0 : props.scoreAverage.toFixed(1);
	
  return (
    <div className={ style.container } style={{background: backgroundColour}}>
      <span className={ style.score }>{ score }</span>
    </div>
  );
};

export default ScoreCard;