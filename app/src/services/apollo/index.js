import { ApolloWrapper } from "./ApolloWrapper";

export const apolloService = ({ registerAction }) => {
    registerAction({
        hook: '$REACT_ROOT_WRAPPER',
        handler: { component: ApolloWrapper }
    })
}