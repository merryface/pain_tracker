import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer';
import Comments from '../Comments';
import Rating from '../Rating';
import Score from '../TodayScore/Score';

interface Props {
	ratings: string[],
};

const Homepage = ({ ratings }: Props): JSX.Element => {
	return (
		<>
			<Header />

			<main>
				<Score />
				{ ratings.map(rating => (
					<Rating title={ rating } key={ rating } />
				))}
				<Comments />
			</main>

			<Footer />
		</>
	);
};

export default Homepage;
