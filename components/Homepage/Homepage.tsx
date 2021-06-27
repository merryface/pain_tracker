import React from 'react'
// import styles from './Homepage.module.css'
import Header from '../common/Header'
import Footer from '../common/Footer';
import ScoreCard from '../TodayScore/ScoreCard';

export default function Homepage() {
  return (
    <>
    <Header />
    <ScoreCard />
    <Footer />
    </>
  )
}
