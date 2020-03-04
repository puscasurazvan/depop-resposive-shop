import React, { useEffect } from 'react'
import Product from '../Product'

const AvailableProducts = ({ products, setCount }) => {
  const filteredProducts = products.filter(({ sold }) => sold === true)

  useEffect(() => {
    if (filteredProducts) {
      setCount(filteredProducts.length)
    }
  }, [setCount, filteredProducts])

  return filteredProducts.map(({ id, title, brand, size, price, img }) => {
    return (
      <Product
        key={id}
        productTitle={title}
        imageURL={img}
        productBrand={brand}
        productSize={size}
        productPrice={price}
      />
    )
  })
}

export default AvailableProducts
