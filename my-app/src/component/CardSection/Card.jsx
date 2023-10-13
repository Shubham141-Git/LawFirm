import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as Gift } from "../../assets/gift.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./Card.module.css";

const Cards = ({ content }) => {
  return (
    <Box
      sx={{
        maxWidth: "359px",
        height: "377px",
        borderRadius: "14px",
        bgcolor: "#1D1D1D;",
        border: " 1.4px solid rgba(255, 255, 255, 0.10);",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        p: "24px",
      }}
      id={content.id}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{
          width: 101,
          height: 101,
          bgcolor: "#FFFFFF",
          ml: "24px",
        }}
      >
        <Gift />
      </Avatar>
      <Typography
        sx={{
          color: "ffffff",
          fontFamily: "Inter",
          fontSize: 24,
          fontStyle: "normal",
          fontWeight: "600",
          ml: "24px",
        }}
      >
        {content.title}
      </Typography>

      <Typography
        sx={{
          color: "#474747",
          fontFamily: "Inter",
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: "500",
          ml: "24px",
        }}
      >
        {content.subtitle}
      </Typography>

      <Button className={styles.button}>Read More</Button>
    </Box>
  );
};

export default Cards;
