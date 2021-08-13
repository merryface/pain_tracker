import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Calendar from 'react-calendar';

import Layout from '../Layout';

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
				onChange={ handleChange }
				value={ date }
				formatDay={ (locale, date) => {
					const dateId = getIdFromDate(date);
					if (days[dateId]) {
						return `${ date.getDate() } ${ ratingAverage(days[dateId].ratings).toFixed(1) }`
					} else {
						return `${ date.getDate() }`;
					}
				} }
			/>
		</Layout>
	);
};

export default History;
