import { Customer } from './components/Customer'
import { Customers } from './components/Customers'
import GroupIcon from '@mui/icons-material/Group'

export const customersPath = '/customers'
export const customerPath = '/customer'

export const customersFeature = ({ registerAction }) => {
  registerAction({
    hook: 'addRoute',
    handler: {
      path: customersPath,
      element: <Customers />,
    },
  })

  registerAction({
    hook: 'addRoute',
    handler: {
      path: customerPath,
      element: <Customer />,
    },
  })

  registerAction({
    hook: 'addMenuItem',
    handler: {
      path: customersPath,
      label: 'Customers',
      icon: <GroupIcon />,
    },
  })
}
