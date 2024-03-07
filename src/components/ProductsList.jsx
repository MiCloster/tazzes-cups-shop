import React from 'react'
import "../styles/components.css"
import { Filters } from './Filters'


export default function ProductsList({products}) {
  return (
    <>
    <Filters></Filters>
      <div className='products'>
        <ul>
            {products.map(item=>(
                <li key={item.id}>
                <img src={item.imageUrl} alt={item.name}/>
                <div>
                    <strong>{item.name}</strong>
                    <p>{item.price}</p>
                </div>
                </li>
            ))}

        </ul>
   

    </div>
    </>
    
  )
}
