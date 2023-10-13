import * as React from "react";

import CardMedia from "@mui/material/CardMedia";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import { Box, Typography } from "@mui/material";

const Practice = () => {
  const images = [
    {
      id: 1,
      title1: "BUSINESS LAW",
      image1: p1,
      title2: "PARTNERSHIP LAW",
      image2: p2,
    },
    {
      id: 3,
      title1: "REAL ESTATE LAW",
      image1: p3,
      title2: "BUSINESS LAW",
      image2: p4,
    },
    {
      id: 5,
      title1: "LANDLORD DISPUTES",
      image1: p5,
      title2: "ELDER ABUSE",
      image2: p6,
    },
  ];
  return (
    <Box
      sx={{
        maxWidth: "1130px",
        mt: "150px",
        mr: "auto",
        ml: "auto",
      }}
    >
      <Typography variant="h3" textAlign="center" marginBottom="100px">
        Area of Practices
      </Typography>
      {images.map((e) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: "9px",
              mb: "8px",
            }}
          >
            <Box sx={{ position: "relative" }} id={e.id}>
              <img src={e.image1} />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "30px",
                  right: "25%",
                  color: "#FFFBF2",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                {e.title1}
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <img src={e.image2} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "30px",
                  right: "25%",
                  color: "#FFFBF2",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                {e.title2}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Practice;
