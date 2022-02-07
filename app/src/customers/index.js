import { Customers } from "./components/Customers"

export const customersPath = '/customers'

export const customersFeature = ({registerAction}) => {

    registerAction({
        hook: 'addRoute',
        handler: {
            path: customersPath,
            element: <Customers />
        }
    })

}