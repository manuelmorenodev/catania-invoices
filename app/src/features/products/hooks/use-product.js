import { gql, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { parseCurrency } from '../../../utils'

const PRODUCT_MODEL = {
  id: null,
  ref: null,
  name: null,
  price: null,
  description: null,
}

const QUERY_GET_PRODUCT = gql`
  query GetProduct($id: Int!) {
    product: products_by_pk(id: $id) {
      id
      ref
      name
      price
      description
    }
  }
`

const MUTATION_UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: Int!
    $ref: String!
    $name: String!
    $price: float8!
    $description: String!
  ) {
    product: update_products_by_pk(
      pk_columns: { id: $id }
      _set: { ref: $ref, name: $name, price: $price, description: $description }
    ) {
      id
      name
      ref
      price
      description
    }
  }
`

const MUTATION_INSERT_PRODUCT = gql`
  mutation InsertProduct(
    $ref: String!
    $name: String!
    $price: float8!
    $description: String!
  ) {
    product: insert_products_one(
      object: {
        name: $name
        price: $price
        ref: $ref
        description: $description
      }
    ) {
      id
      name
      price
      ref
      description
    }
  }
`

export const useProduct = (id = null) => {
  const [product, setProduct] = useState(PRODUCT_MODEL)

  const { data, loading, error } = useQuery(QUERY_GET_PRODUCT, {
    skip: !id,
    variables: {
      id,
    },
  })

  const [
    updateProduct,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(MUTATION_UPDATE_PRODUCT)

  const [
    insertProduct,
    { data: insertData, loading: insertLoading, error: insertError },
  ] = useMutation(MUTATION_INSERT_PRODUCT)

  useEffect(() => {
    if (data && data.product) {
      let newProduct = {}
      Object.keys(data.product)
        .filter(key => key in PRODUCT_MODEL)
        .forEach(key => (newProduct[key] = data.product[key]))
      setProduct(newProduct)
    }
  }, [data])

  const saveProduct = () => {
    const productToSave = { ...product }
    productToSave.price = parseCurrency(product.price)

    if (product.id) {
      updateProduct({ variables: product })
      return !updateError
    } else {
      insertProduct({
        variables: product,
      })
      return !insertError
    }
  }

  return { product, setProduct, saveProduct, loading, error }
}
