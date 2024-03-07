import React from 'react'
import "../styles/components.css"


export default function ProductsList({products}) {
  console.log(products)
  return (
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
    
  )
}
