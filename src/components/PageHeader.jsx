import { Box, Typography } from "@mui/material";
import React from "react";

const PageHeader = (props) => {
  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          {props.title}
        </Typography>
      </Box>
      <Box>{props.link}</Box>
    </Box>
  );
};

export default PageHeader;
