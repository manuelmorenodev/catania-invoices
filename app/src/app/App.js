import { useGetContext } from "@forrestjs/react-root";
import { AppBar, Box, Button, Paper, Stack, Toolbar } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

export const App = () => {
  
  const routes = useGetContext("app.routes");

  return (
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
  );
};
