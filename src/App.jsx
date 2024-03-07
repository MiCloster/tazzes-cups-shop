import { useState } from "react"
import ProductsList from "./components/ProductsList"
import { products as initialProducts} from './mocks/products.json'
import { useFilters } from "./hooks/useFilters"
function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <ProductsList products={filteredProducts}></ProductsList>
    </>
  )
}

export default App
