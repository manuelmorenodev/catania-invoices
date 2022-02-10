import { useGetContext } from '@forrestjs/react-root'
import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Toolbar,
} from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'
import './styles.css'

export const App = () => {
  const routes = useGetContext('app.routes')
  const menuItems = useGetContext('app.menuItems')

  return (
    <Box sx={{ height: '100vh', pt: 8 }}>
      <AppBar>
        <Toolbar>
          <Stack spacing={2} direction="row">
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                style={{ textDecoration: 'none' }}
              >
                <Button variant="contained" disableElevation>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Container sx={{ pb: 3 }}>
        <Paper elevation={3} sx={{ m: 3, px: 5, py: 4 }}>
          <Routes>
            {routes.map(route => (
              <Route {...route} key={route.path} />
            ))}
          </Routes>
        </Paper>
      </Container>
    </Box>
  )
}
