import React from 'react';
import Homebody from '../components/homebody';
import Navbar from '../components/navbar';

function Home() {
  return (
    <div className="App">
      <Navbar title="lastest update"/>
        <Homebody />
    </div>
  );
}

export default Home;