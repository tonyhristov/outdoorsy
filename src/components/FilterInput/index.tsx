import React, {useState,useContext, useEffect} from 'react';
import RVContext from '../../context';
import styled from 'styled-components';

function FilterInput() {
  const [filter, setFilter] = useState('')
  const context = useContext(RVContext)
  
  let waitForText:any = null

  const HandleChange = (change: string) => {
    if (waitForText){
       clearTimeout(waitForText)
       waitForText = null;
    }

    waitForText = setTimeout(() => {
      setFilter(change)
    }, 300)

  }

  context.changeFilter(filter);
  
  return (
    <div className="FilterInputContainer">
      <Filter name="filter" onChange={((e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        HandleChange(newValue)
      })}/>
    </div>
  );
}

const Filter = styled.input`
  width: 100%;
  height: 50px;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 10px;
  border-color: grey;
`
  
export default FilterInput;