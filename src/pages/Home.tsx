import React, { useEffect } from 'react';
import { getRegions } from '../services/config/consults';

function Home() {
  
  useEffect(() => {
      getRegions().then(response => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className='home'>
      <h1>Home</h1>
    </div>
  );
}

export default Home;