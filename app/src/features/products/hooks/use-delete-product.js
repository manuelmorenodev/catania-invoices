import { gql, useMutation } from '@apollo/client'

const MUTATION_DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    product: delete_products_by_pk(id: $id) {
      id
    }
  }
`

export const useDeleteProduct = () => {
  const [deleteProduct, { data, loading, error }] = useMutation(
    MUTATION_DELETE_PRODUCT
  )

  return [deleteProduct, { data, loading, error }]
}
