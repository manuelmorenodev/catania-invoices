import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useGetConfig } from "@forrestjs/react-root";

export default ({ children }) => {

    const uri = useGetConfig('apollo.client.config.uri')
    if (!uri) {
        throw 'Hasura endpoint not configured'
    }

    const client = new ApolloClient({
        uri: uri,
        cache: new InMemoryCache()
    })

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}