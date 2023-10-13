import React from "react";
import { Box, Typography } from "@mui/material";
import TeamCard from "./TeamCard";
import image1 from "../../assets/im1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import image4 from "../../assets/img4.png";
import image5 from "../../assets/img5.png";
import image6 from "../../assets/img6.png";
import styles from "./Team.modules.css";

const OurTeam = () => {
  const data = [
    {
      id: 1,
      name: "Danial Def",
      cases: 301,
      avatar: image1,
    },
    {
      id: 2,
      name: "Sanfole ",
      cases: 850,
      avatar: image2,
    },
    {
      id: 3,
      name: "Cesforila",
      cases: 470,
      avatar: image3,
    },
    {
      id: 4,
      name: "Colleen",
      cases: 180,
      avatar: image4,
    },
    {
      id: 5,
      name: "Haldone",
      cases: 212,
      avatar: image5,
    },
    {
      id: 6,
      name: "Nik Jeo ",
      cases: 350,
      avatar: image6,
    },
  ];
  return (
    <Box sx={{ maxWidth: "lg", mt: "150px", mr: "auto", ml: "auto" }}>
      <Typography variant="h3" textAlign="center" marginBottom="100px">
        Our Team
      </Typography>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        className={styles.teams}
      >
        {data.map((e) => {
          return <TeamCard item={e} />;
        })}
      </Box>
    </Box>
  );
};

export default OurTeam;
