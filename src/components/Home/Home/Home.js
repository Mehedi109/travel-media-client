import React from 'react';
import Destinations from '../Destinations/Destinations';
import Banner from '../Banner/Banner';
import Progress from '../Progress/Progress';
import Review from '../Review/Review';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <Progress></Progress>
      <Review></Review>
    </div>
  );
};

export default Home;
