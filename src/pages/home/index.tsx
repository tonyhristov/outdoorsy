import React, { useContext, useEffect, useState } from 'react';
import FilterInput from '../../components/FilterInput';
import RVContext from '../../context';
import getData from '../../utils/getData';
import styled from "styled-components"

function Home() {
  // const [rentals, setRentals] = useState([])
  const [rentals, setRentals] = useState<{
    name:string,
    image_id:string,
    image: string
  }[]>([])
  const context = useContext(RVContext);
    
  const test =async () => {
    const arr = []
    
    const properties = context.filter ?? ""
    const res= await getData(properties)

    if(res){
      for (let i = 0; i < res.data.length; i++) {
        const rental = {
          name: "",
          image_id: "",
          image: ""
        }
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

  rentals.map(x=>{
    console.log(x);
  });

  useEffect(()=>{
    test()
  },[])

    return (
      <Wrapper className="HomeContainer">
        <FilterInput/>
        <div>
          {rentals.map(element=> (
            <RentalContainer>
              <RentalImage src={element.image} alt={element.image_id}/>
              <Info>{element.name}</Info>
            </RentalContainer>
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

  const RentalContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin-bottom: 20px;
  `

  const RentalImage = styled.img`
    width: 275px;
    height: 150px;
    float: right;
    border-radius: 10px;
    object-fit: cover;
    object-position: 100% 50%;
  `
  const Info = styled.p`
    font-size: 20px;
  `
  
  export default Home;