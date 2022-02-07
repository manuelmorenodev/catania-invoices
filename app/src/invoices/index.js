import { Invoices } from "./components/Invoices"

export const invoicesFeature = ({registerAction}) => {

    registerAction({
        hook: 'addRoute',
        handler: {
            path: '/invoices',
            element: <Invoices />
        }
    })

}