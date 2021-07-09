import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer';
import Comments from '../Comments';
import Rating from '../Rating';
import DayScoreCard from '../DayScore/DayScoreCard';
import TreatmentToggle from '../TreatmentToggle';

interface Props {
	ratings: string[],
};

const Homepage = ({ ratings }: Props): JSX.Element => {
	return (
		<>
			<Header />

			<main>
				<DayScoreCard />
				{ ratings.map(rating => (
					<Rating title={ rating } key={ rating } />
				))}
				<TreatmentToggle />
				<Comments />
			</main>

			<Footer />
		</>
	);
};

export default Homepage;