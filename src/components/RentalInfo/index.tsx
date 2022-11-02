import React from 'react';
import styled from "styled-components"

function RentalInfo({props}:any) {
    return (
            <RentalContainer>
              <RentalImage src={props.image} alt={props.image_id}/>
              <Info>{props.name}</Info>
              <Info>{props.vehicleType}</Info>
            </RentalContainer>
    );
}

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
  
export default RentalInfo;