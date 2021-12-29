import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Datagrid from "./pages/Datagrid";
// const drawerWidth = 240;

const RoutesFiles = () => {
  return (
    <>
      <Box
        sx={{
          // width: `calc(100vw - ${drawerWidth}px)`,
          width: "100vw",
          backgroundColor: "rgb(247, 249, 252)",
          height: "100vh",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables/dataGrid" element={<Datagrid />} />
        </Routes>
      </Box>
    </>
  );
};

export default RoutesFiles;
