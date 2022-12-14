import React, {useState} from 'react';
import './App.css';
import Home from './pages/home';
import RVContext from './context';

function App() {
  const [filter, setFilter] = useState("")

  const changeFilter = (filter:string) =>{
    setFilter(filter)
  }

  const AppContext = {filter, changeFilter}

  return (
    <RVContext.Provider value={AppContext}>
      <div className="App">
        <Home/>
    </div>
    </RVContext.Provider>
  );
}

export default App;
