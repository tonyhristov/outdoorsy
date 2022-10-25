const getData = async(filter:string)=>{
    // const promise = await fetch("https://search.outdoorsy.com/rentals?filter[keywords]=trailer&page[limit]=8&page[offset]=8")
    const promise = await fetch(`https://search.outdoorsy.com/rentals?filter[keywords]=${filter}&page[offset]=8`)
    //

    const rentals = await promise.json()
    return rentals
}

export default getData