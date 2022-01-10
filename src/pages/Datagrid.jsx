import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Link, Typography } from "@mui/material";
import { rows, columns } from "../utils/DataGridItems";
import PageHeader from "../components/pages/PageHeader";
import DividerHorizontal from "../components/pages/DividerHorizontal";

const Datagrid = () => {
  const [row, setRow] = useState(5);
  const pageSizeChangeHandler = (e) => {
    setRow(e);
  };
  return (
    <Box sx={{ width: "90%", margin: "50px" }}>
      <Box>
        <PageHeader title="Data Grid" link="Tables/DataGrid" />
        <DividerHorizontal />
      </Box>

      <Box sx={{ backgroundColor: "white" }}>
        <Box sx={{ fontSize: "25px", padding: "20px" }}>
          Data Grid
          <Typography>
            A fast and extendable data table and data grid for React, made by
            Material-UI. <Link> Official docs</Link>
          </Typography>
        </Box>

        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={row}
            onPageSizeChange={pageSizeChangeHandler}
            rowsPerPageOptions={[5, 10, 15]}
            checkboxSelection
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Datagrid;
