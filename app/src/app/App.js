import { useGetContext } from '@forrestjs/react-root'
import { AppBar, Box, Button, Container, Paper, Stack, Toolbar } from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'

export const App = () => {
    const routes = useGetContext('app.routes')
    const menuItems = useGetContext('app.menuItems')

    return (
        <Box sx={{ height: '100vh' }}>
            <AppBar position="relative">
                <Toolbar>
                    <Stack spacing={2} direction="row">
                        {menuItems.map((item) => (
                            <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" disableElevation>
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </Stack>
                </Toolbar>
            </AppBar>
            <Container>
                <Paper elevation={1} sx={{ m: 3, py: 2, px: 5 }}>
                    <Routes>
                        {routes.map((route) => (
                            <Route {...route} key={route.path} />
                        ))}
                    </Routes>
                </Paper>
            </Container>
        </Box>
    )
}
