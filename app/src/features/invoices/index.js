import { Invoices } from "./Invoices"

export const invoicesFeature = ({registerAction}) => {

    registerAction({
        hook: 'addRoute',
        handler: {
            path: '/invoices',
            element: <Invoices />
        }
    })

}