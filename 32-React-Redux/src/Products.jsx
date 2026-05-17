import React from 'react'
import { useSelector } from 'react-redux'

function Products() {

   const products = useSelector(state=>state.products);
   console.log(products)
  return (
    <div>
    {JSON.stringify(products)}
    </div>
  )
}

export default Products