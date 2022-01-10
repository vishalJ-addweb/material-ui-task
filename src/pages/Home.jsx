import React from "react";
import { Box } from "@mui/material";

const Home = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box sx={{ backgroundColor: "red" }}>
      This is Home Page
      <input onChange={handleChange} />
    </Box>
  );
};

export default Home;
