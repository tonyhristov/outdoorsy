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
      <div className="HomeContainer">
        <FilterInput/>
        <div>
          {rentals.map(element=> (
            <Container>
              <RentalImage src={element.image} alt={element.image_id}/>
              <p>{element.name}</p>
            </Container>
          ))}
        </div>
      </div>
    );
  }

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: 20px 20px; */
    grid-gap: 5px;
    margin-bottom: 20px;
  `

  const RentalImage = styled.img`
    width: 300px;
    height: 150px;
  `
  const Info = styled.p`
    text-align: center;
  
  `
  
  export default Home;