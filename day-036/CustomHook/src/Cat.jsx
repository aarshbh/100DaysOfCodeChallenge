import React from 'react'
import { useGetCat } from "./useGetCat";
const Cat = () => {
    const {data, isLoading , refetchData} = useGetCat()
    if(isCatLoading) return <h1>Loading...</h1>
  return (
    <div>
      <h1> {data?.fact} </h1>
    </div>
  )

}

export default Cat
