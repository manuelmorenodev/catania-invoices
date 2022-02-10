import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const QUERY_GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      ref
      name
      description
      price
    }
  }
`

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const { data, loading, error } = useQuery(QUERY_GET_PRODUCTS)

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products)
    }
  }, [data])

  return { products, loading, error }
}
