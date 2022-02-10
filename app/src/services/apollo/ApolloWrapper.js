import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useGetConfig } from '@forrestjs/react-root'

export const ApolloWrapper = ({ children }) => {
  const uri = useGetConfig('apollo.client.config.uri')
  if (!uri) {
    throw new Error('Hasura endpoint not configured')
  }

  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
