import React, { useContext, useEffect, useState } from 'react';
import FilterInput from '../../components/FilterInput';
import RVContext from '../../context';
import getData from '../../utils/getData';
import styled from "styled-components"
import RentalInfo from '../../components/RentalInfo';

function Home() {
  const [rentals, setRentals] = useState<{ name:string, image_id:string, image: string }[]>([])
  const context = useContext(RVContext);
    
  const getRentalData =async () => {
    const arr = []
    
    const properties = context.filter ?? "camper"
    const res = await getData(properties)

    if(res){
      for (let i = 0; i < res.data.length; i++) {
        const rental = { name: "", image_id: "", image: "" }

        if(res.data[i].attributes.name) {
          const image:any = []
        
          rental.name = res.data[i].attributes.name
          rental.image_id = res.data[i].relationships.primary_image.data.id
        
          for (let j = 0; j < res.included.length; j++) {
            if (res.included[j].id === res.data[i].relationships.primary_image.data.id) {
              image.push(res.included[j].attributes.url);
            }
          }
    
          rental.image = image[0]
        }
        arr.push(rental)
      }
    }
    setRentals(arr)
  }

  useEffect(()=>{
    getRentalData()
  })

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