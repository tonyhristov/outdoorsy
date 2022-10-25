import React, {useState} from 'react';

function FilterInput() {
    const [filter, setFilter] = useState('')
  
   const changeFilter = (change: string) => {
      setFilter(change)
  
   }
  
    return (
      <div className="FilterInputContainer">
  
        <h1>{filter}</h1>
        <input name="filter" onChange={((e: React.FormEvent<HTMLInputElement>) => {
          const newValue = e.currentTarget.value;
          changeFilter(newValue)
        })}/>
      </div>
    );
  }
  
  export default FilterInput;