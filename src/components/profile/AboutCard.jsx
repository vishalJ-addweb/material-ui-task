import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import styles from "../../css/Profile.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const AboutCard = () => {
  const [doubleClickEditLives, setDoubleClickEditLives] = useState(false);
  const [doubleClickEditWorks, setDoubleClickEditWorks] = useState(false);
  const [doubleClickEditAddress, setDoubleClickEditAddress] = useState(false);
  const [lives, setLives] = useState("San Fransisco, SA");
  const [works, setWorks] = useState("Material UI");
  const [address, setAddress] = useState("Boston");
  return (
    <ClickAwayListener
      onClickAway={(e) => {
        setDoubleClickEditLives(false);
        setDoubleClickEditWorks(false);
        setDoubleClickEditAddress(false);
      }}
    >
      <Card sx={{ width: 300, p: 2, mt: 2 }}>
        <Box className={styles.card_titile_box} sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            About
          </Typography>
        </Box>
        <Box sx={{ ml: 2, display: "flex" }}>
          <HomeOutlinedIcon />
          <Typography sx={{ ml: 1 }}>Lives in</Typography>
          <input
            type="text"
            value={lives}
            onChange={(e) => setLives(e.target.value)}
            onDoubleClick={(e) => {
              e.target.readOnly = false;
              setDoubleClickEditLives(true);
            }}
            onBlur={(e) => {
              setDoubleClickEditLives(false);
              e.target.readOnly = true;
            }}
            style={{ width: "155px" }}
            className={`${
              doubleClickEditLives
                ? styles.about_card_input_edit
                : styles.about_card_input
            }`}
            readOnly
          />
        </Box>
        <Box sx={{ ml: 2, display: "flex" }}>
          <WorkOutlineOutlinedIcon />
          <Typography sx={{ ml: 1 }}>Works at</Typography>
          <input
            type="text"
            value={works}
            onChange={(e) => setWorks(e.target.value)}
            onDoubleClick={(e) => {
              e.target.readOnly = false;
              setDoubleClickEditWorks(true);
            }}
            onBlur={(e) => {
              setDoubleClickEditWorks(false);
              e.target.readOnly = true;
            }}
            style={{ width: "130px" }}
            className={`${
              doubleClickEditWorks
                ? styles.about_card_input_edit
                : styles.about_card_input
            }`}
            readOnly
          />
        </Box>
        <Box sx={{ ml: 2, display: "flex" }}>
          <FmdGoodOutlinedIcon />
          <Typography sx={{ ml: 1 }}>Lives in</Typography>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onDoubleClick={(e) => {
              e.target.readOnly = false;
              setDoubleClickEditAddress(true);
            }}
            onBlur={(e) => {
              setDoubleClickEditAddress(false);
              e.target.readOnly = true;
            }}
            style={{ width: "130px" }}
            className={`${
              doubleClickEditAddress
                ? styles.about_card_input_edit
                : styles.about_card_input
            }`}
            readOnly
          />
        </Box>
      </Card>
    </ClickAwayListener>
  );
};

export default AboutCard;
