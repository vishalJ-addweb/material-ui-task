import { Box, Grid } from "@mui/material";
import faker from "faker";
import React from "react";
import profileStyles from "../css/Profile.module.css";
import PageHeader from "../components/pages/PageHeader";
import DividerHorizontal from "../components/pages/DividerHorizontal";
import ListCard from "../components/list/ListCard";
import { FixedSizeList } from "react-window";

const data = new Array(50).fill().map((value, index) => ({
  id: index,
  image: faker.image.image(),
  title: faker.lorem.words(2),
  status: "",
  authors: `${faker.name.findName()},${faker.name.findName()}
  ,${faker.name.findName()}`,
}));

const List = () => {
  const row = () => (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item key={item.id}>
          <ListCard items={item} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box className={profileStyles.box}>
      <Box>
        <PageHeader title="List of Users" />
        <DividerHorizontal />
      </Box>

      <FixedSizeList
        height={600}
        width={1510}
        itemCount={data.length}
        itemSize={8}
      >
        {row}
      </FixedSizeList>
    </Box>
  );
};

export default List;
