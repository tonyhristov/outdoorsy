import React, {useState,useContext} from 'react';
import RVContext from '../../context';

function FilterInput() {
    const [filter, setFilter] = useState('')
    const context = useContext(RVContext)
  
   const HandleChange = (change: string) => {
      setFilter(change)
  
   }

   context.changeFilter(filter);
  
    return (
      <div className="FilterInputContainer">
        <input name="filter" onChange={((e: React.FormEvent<HTMLInputElement>) => {
          const newValue = e.currentTarget.value;
          HandleChange(newValue)
        })}/>
      </div>
    );
  }
  
  export default FilterInput;