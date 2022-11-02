import React, { useContext, useEffect, useState } from 'react';
import FilterInput from '../../components/FilterInput';
import RVContext from '../../context';
import getData from '../../utils/getData';
import styled from "styled-components"
import RentalInfo from '../../components/RentalInfo';

function Home() {
  const [rentals, setRentals] = useState<{ name:string, image_id:string, image: string, vehicleType: string }[]>([])
  const context = useContext(RVContext);
    
  const getRentalData =async () => {
    const properties = context.filter ?? "camper"
    const res = await getData(properties)

    setRentals(res)
  }

  useEffect(()=>{
    getRentalData()
  }, [context.filter])


  return (
    <Wrapper className="HomeContainer">
      <FilterInput/>
      <div>
        {rentals.map(element=> (
          <RentalInfo props={element}/>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  float: left;
  margin-left: 25%;
`
  
export default Home;