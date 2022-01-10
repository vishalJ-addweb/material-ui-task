import { Box } from "@mui/material";
import React from "react";
import DividerHorizontal from "../components/pages/DividerHorizontal";
import PageHeader from "../components/pages/PageHeader";
import styles from "../css/Profile.module.css";
import ProfileCard from "../components/profile/ProfileCard";
import AboutCard from "../components/profile/AboutCard";

const Profile = () => {
  return (
    <Box className={styles.box}>
      <Box>
        <PageHeader title="Profile" link="Pages/Profile" />
        <DividerHorizontal />
      </Box>
      <ProfileCard />
      <AboutCard />
    </Box>
  );
};

export default Profile;
