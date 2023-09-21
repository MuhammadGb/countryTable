import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CountryTable from "./components/CountryTable";
import "./App.css";

function App() {
  return (
    <Container maxWidth="xl" sx={{ p: "0px !important" }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Countries Table
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          mt: 3,
          "& .MuiTextField-root": { my: 1, width: "100%" },
        }}
      >
        <Container maxWidth="xl">
          <CountryTable />
        </Container>
      </Box>
    </Container>
  );
}

export default App;
