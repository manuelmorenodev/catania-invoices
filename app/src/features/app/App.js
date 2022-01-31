import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useGetContext } from "@forrestjs/react-root";
import { AppBar, Box, Button, Paper, Stack, Toolbar } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";



const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache()
})

export const App = () => {
  const routes = useGetContext("app.routes");
  console.log(routes);
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Box sx={{ height: '100vh' }}>
        <AppBar position="relative">
          <Toolbar>
            <Stack spacing={2} direction="row">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" disableElevation>Home</Button>
              </Link>
              <Link to="/invoices" style={{ textDecoration: 'none' }}>
                <Button variant="contained" disableElevation>Invoices</Button>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
        <Paper elevation={1} sx={{ m: 3, py: 2, px: 5 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Extends this via features */}
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Routes>
        </Paper>
      </Box>
    </ApolloProvider>
  );
};
