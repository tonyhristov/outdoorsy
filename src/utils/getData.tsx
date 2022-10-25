const getData = async(filter:string)=>{
    const promise = await fetch(`https://search.outdoorsy.com/rentals?filter[keywords]=${filter}`)

    const rentals = await promise.json()
    return rentals
}

export default getData