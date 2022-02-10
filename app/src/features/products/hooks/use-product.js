import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const QUERY_GET_PRODUCT = gql`
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

export const useProduct = id => {
  const [product, setProduct] = useState({
    id: null,
    ref: null,
    name: null,
    price: null,
    description: null,
  })

  return { product, setProduct }
}
