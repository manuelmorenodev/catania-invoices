import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import esLocale from 'date-fns/locale/es';

export const DateNfsWrapper = ({ children }) => {
    return <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>{children}</LocalizationProvider>
}