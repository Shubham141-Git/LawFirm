import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const TeamCard = ({ item }) => {
  return (
    <Box sx={{ width: "344px", height: "109px", borderRadius: "14px" }}>
      <Box
        sx={{
          width: "209px",
          height: "68px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={item.avatar} alt={item.name} />
        <Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              color: " #585858",

              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            {item.cases} Cases
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamCard;
