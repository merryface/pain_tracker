import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer';
import Comments from '../Comments';
import Rating from '../Rating';

interface Props {
	ratings: string[],
};

const Homepage = ({ ratings }: Props): JSX.Element => {
	return (
		<>
			<Header />

			<main>
				{ ratings.map(rating => (
					<Rating title={ rating } />
				))}
				<Comments />
			</main>

			<Footer />
		</>
	);
};

export default Homepage;