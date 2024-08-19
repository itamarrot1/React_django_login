import React, { useContext, useEffect, useState } from 'react'
import MyUserName from './Username'
import { use } from 'react'


export const Shop = () => {
  const SERVER = 'http://127.0.0.1:8000/'
  const {username} = useContext(MyUserName)

  const [Products, setProducts] = useState([])

useEffect(() => {
  get_products()
}, [])


  const get_products=()=>{
    window.axios.get(SERVER + 'shop/').then(res=> setProducts(res.data)
    )
  }

  return (
    <div>
        welcome : {username}
        our products: 
        {Products.map(pro=> <div>
          {pro.description} , {pro.price}

        </div>)}
        


    </div>
  )
}
