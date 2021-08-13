import React from 'react'
import Layout from '../Layout';
import Comments from '../Comments';
import Rating from '../Rating';
import DayScoreCard from '../DayScore/DayScoreCard';
import TreatmentToggle from '../TreatmentToggle';

interface Props {
	ratings: string[],
	treatments: number[],
};

const Homepage = ({ ratings, treatments }: Props): JSX.Element => {
	return (
		<Layout>
			<DayScoreCard />
			{ ratings.map(rating => (
				<Rating title={ rating } key={ rating } />
			)) }

			{ treatments.map(id => (
				<TreatmentToggle id={ id } key={ id } />
			)) }

			<Comments />
		</Layout>
	);
};

export default Homepage;