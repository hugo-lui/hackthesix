import React from 'react';
import HeroBanner from '../components/home/HeroBanner';

const Home = (props) => {
  //const urls = props.urls.map((url) => <li>{url}</li>);
  
  return (
    <div>
      <div className="h-screen">
        <HeroBanner/>
      </div>
    </div>
  );
}

export default Home;
