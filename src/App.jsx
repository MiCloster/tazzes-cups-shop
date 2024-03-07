import { useState } from "react"
import ProductsList from "./components/ProductsList"
import { products as initialProducts} from './mocks/products.json'

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 1000
  })

  const filterProducts = (products)=>{
    return products.filter(item =>{
      return(
        item.price <= filters.maxPrice && (
          filters.category ==='all' ||
          item.category === filters.category
        )
        
      )
    })
  }

  const filteredProducts= filterProducts(initialProducts)

  return (
    <>
      <ProductsList products={filteredProducts}></ProductsList>
    </>
  )
}

export default App
