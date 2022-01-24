import { Box, Grid } from "@mui/material";
import faker from "faker";
import React from "react";
import profileStyles from "../css/Profile.module.css";
import PageHeader from "../components/pages/PageHeader";
import DividerHorizontal from "../components/pages/DividerHorizontal";
import ListCard from "../components/list/ListCard";
import { FixedSizeGrid } from "react-window";

const data = new Array(5000).fill().map((key) => ({
  id: key,
  image: faker.image.image(),
  title: faker.lorem.words(2),
  status: "",
  authors: `${faker.name.findName()},${faker.name.findName()}
  ,${faker.name.findName()}`,
}));

const UsersList = () => {
  const columnCount = 4;
  const cell = ({ columnIndex, rowIndex, style }) => (
    // <Grid container style={style}>
    //   <Grid item key={data[rowIndex].id}>
    //     <ListCard items={data[rowIndex * columnCount + columnIndex]} />
    //   </Grid>
    // </Grid>
    <Grid container key={data[rowIndex].id} style={style}>
      <ListCard items={data[rowIndex * columnCount + columnIndex]} />
    </Grid>
  );

  return (
    <Box className={profileStyles.box}>
      <Box>
        <PageHeader title="List of Users" />
        <DividerHorizontal />
      </Box>

      <FixedSizeGrid
        columnCount={columnCount}
        columnWidth={373}
        rowCount={Math.floor(data.length / 4)}
        rowHeight={320}
        height={600}
        width={1510}
      >
        {cell}
      </FixedSizeGrid>
    </Box>
  );
};

export default UsersList;
