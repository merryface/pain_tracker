import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Calendar from 'react-calendar';

import Layout from '../Layout';
import Score from '../DayScore/Score/Score';

import { iState } from '../../data/interfaces';
import getIdFromDate from '../../data/utils/getIdFromDate';
import ratingAverage from '../../data/utils/ratingAverage';
import styles from './History.module.scss';

interface Props {

};

const History = ({ }: Props): JSX.Element => {
	const [date, setDate] = useState(new Date());
	const router = useRouter();

	const days = useSelector((state: iState) => {
		return state.days;
	})

	const handleChange = (date: Date) => {
		setDate(date);
		router.push(`${ +date }`);
	};

	return (
		<Layout>
			<Calendar
				className={ styles.calendar }
				onChange={ handleChange }
				value={ date }
				tileContent={ ({ date }) => {
					const dateId = getIdFromDate(date);
					if (days[dateId]) {
						return <Score small={ true } classes={ [styles.score] } dayScore={ ratingAverage(days[dateId].ratings) } />
					} else {
						return <Score small={ true } classes={ [styles.score] } dayScore={ 0.0 } />;
					}
				} }
			/>
		</Layout>
	);
};

export default History;
