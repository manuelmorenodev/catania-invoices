import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const QUERY_GET_PRODUCTS = gql`
  query GetProducts {
    products(order_by: { id: asc }) {
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
  const { data, loading, error, refetch } = useQuery(QUERY_GET_PRODUCTS, {
    pollInterval: 0,
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products)
    }
  }, [data])

  return { products, loading, error, refetch }
}
