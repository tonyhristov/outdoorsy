const getData = async(filter:string)=>{
    const arr = []
    const promise = await fetch(`https://search.outdoorsy.com/rentals?address=atlanta&filter[keywords]=${filter}&page[offset]=0`)

    const res = await promise.json()

    if(res){
        for (let i = 0; i < res.data.length; i++) {
          const rental = { name: "", image_id: "", image: "", vehicleType: "" }
  
          if(res.data[i].attributes.name) {
            const image:any = []
          
            rental.name = res.data[i].attributes.name
            rental.vehicleType = res.data[i].attributes.display_vehicle_type
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


    return arr
}

export default getData