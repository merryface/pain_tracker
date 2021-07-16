import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer';
import Comments from '../Comments';
import Rating from '../Rating';
import DayScoreCard from '../DayScore/DayScoreCard';
import TreatmentToggle from '../TreatmentToggle';

interface Props {
	ratings: string[],
	treatments: string[],
};

const Homepage = ({ ratings, treatments }: Props): JSX.Element => {
	return (
		<>
			<Header />

			<main>
				<DayScoreCard />
				{ ratings.map(rating => (
					<Rating title={ rating } key={ rating } />
				))}

				{ treatments.map(id => (
					<TreatmentToggle id={ id } key={ id } />
				))}
				
				<Comments />
			</main>

			<Footer />
		</>
	);
};

export default Homepage;