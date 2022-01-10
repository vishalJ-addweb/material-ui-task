import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
  Button,
  CardActions,
} from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import styles from "../../css/Profile.module.css";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ProfileImg from "../../images/ProfileImg.jpg";

const ProfileCard = () => {
  const [name, setName] = useState("Lucy Lavender");
  const [role, setRole] = useState("Lead Developer");
  const [onClickEdit, setOnClickEdit] = useState(false);
  const [updateButton, setUpdateButton] = useState(false);

  const updateHandler = () => {
    setUpdateButton(false);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOnClickEdit(false);
        setUpdateButton(false);
      }}
    >
      <Card sx={{ width: 300, p: 1 }}>
        <Box className={styles.card_titile_box} sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Profile Details
          </Typography>
          {!updateButton ? (
            <Button
              onClick={() => {
                setOnClickEdit(true);
                setUpdateButton(!updateButton);
              }}
              sx={{ color: "black" }}
            >
              <ModeEditOutlineOutlinedIcon />
            </Button>
          ) : null}
        </Box>

        <Box className={styles.card_img_box} sx={{ mb: 1 }}>
          <Avatar src={ProfileImg} sx={{ width: "150px", height: "150px" }} />
        </Box>

        <Box className={styles.card_input_box} sx={{ mb: 1 }}>
          <input
            onChange={(e) => {
              if (onClickEdit) {
                return setName(e.target.value);
              } else {
                return null;
              }
            }}
            className={`${
              onClickEdit && updateButton
                ? styles.card_input_edit
                : styles.card_input
            }`}
            type="text"
            value={name}
            style={{ fontWeight: "bold" }}
          />
          <input
            onChange={(e) => {
              if (onClickEdit) {
                return setRole(e.target.value);
              } else {
                return null;
              }
            }}
            className={`${
              onClickEdit && updateButton
                ? styles.card_input_edit
                : styles.card_input
            }`}
            value={role}
            type="text"
          />
          {updateButton ? (
            <Button variant="contained" onClick={updateHandler}>
              Update
            </Button>
          ) : null}
        </Box>

        <CardActions className={styles.card_button_box}>
          <Button size="small" variant="contained">
            Follow
          </Button>
          <Button size="small" variant="contained">
            Message
          </Button>
        </CardActions>
      </Card>
    </ClickAwayListener>
  );
};

export default ProfileCard;
