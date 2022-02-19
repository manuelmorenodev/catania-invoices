import { Invoices } from './components/Invoices'
import { Invoice } from './components/Invoice'
import DescriptionIcon from '@mui/icons-material/Description'

export const invoicesFeature = ({ registerAction }) => {
  registerAction({
    hook: 'addRoute',
    handler: {
      path: '/invoices',
      element: <Invoices />,
    },
  })

  registerAction({
    hook: 'addRoute',
    handler: {
      path: '/invoice',
      element: <Invoice />,
    },
  })

  registerAction({
    hook: 'addMenuItem',
    handler: {
      path: '/invoices',
      label: 'Invoices',
      icon: <DescriptionIcon />,
    },
  })
}
