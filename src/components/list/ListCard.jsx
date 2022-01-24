import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ListCard = ({ items }) => {
  return (
    <Card
      sx={{
        maxWidth: 355,
        minWidth: 355,
        maxHeight: 300,
        minHeight: 300,
        backgroundColor: "#efefef",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={items.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.title.charAt(0).toUpperCase() +
            items.title.substr(1).toLowerCase()}
          {/* {items.title} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.authors}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ListCard;
