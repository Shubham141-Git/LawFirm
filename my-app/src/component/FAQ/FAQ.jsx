import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import BasicAccordion from "./Accordian ";
const FAQ = () => {
  const faqlist = [
    {
      id: 1,
      summary: "Do I need a personal injury report?",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      id: 2,
      summary: "How much is my case worth?",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      id: 3,
      summary: "What should I do right after car accidect",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      id: 4,
      summary: "How much is my case worth?",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];

  return (
    <Box sx={{ my: "150px", ml: "160px" }}>
      <Typography
        sx={{
          color: "white",
          fontFamily: "Inter",
          fontSize: "54px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "138.023%" /* 74.532px */,
        }}
      >
        FAQ
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ mt: "7px" }}>
          <Typography
            sx={{
              color: "#585858",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "162.523%" /* 74.532px */,
            }}
          >
            `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. `
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "557px" }}>
          {faqlist.map((e) => {
            return <BasicAccordion data={e} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
