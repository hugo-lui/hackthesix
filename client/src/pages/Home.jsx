import React from 'react';
import HeroBanner from '../components/home/HeroBanner';

const Home = (props) => {
  const urls = props.urls.map((url) => <li>{url}</li>);
  
  return (
    <div>
      <div className="h-screen">
        <HeroBanner/>
      </div>
      <div className="border-10"><input type="text" onChange={props.onChange}/></div>
      <button onClick={props.onClick}>Submit</button>
      <ul>{urls}</ul>
    </div>
    
  );
}

export default Home;
