import React, { useContext } from 'react';
import FilterInput from '../../components/FilterInput';
import RVContext from '../../context';

function Home() {
  const context = useContext(RVContext);
    
    return (
      <div className="HomeContainer">
        <h1>{context.filter}</h1>
        <FilterInput/>
      </div>
    );
  }
  
  export default Home;