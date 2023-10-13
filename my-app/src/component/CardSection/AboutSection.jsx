import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Cards from "./Card";
const AboutSection = () => {
  const details = [
    {
      id: 1,
      title: "98% Success Rate",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      id: 2,
      title: "100% Success Rate",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      id: 3,
      title: "100% Success Rate",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];

  return (
    <Box sx={{ mt: "150px", ml: "auto", mr: "auto", width: "1139px" }}>
      <Typography variant="h3" textAlign={"center"} marginBottom="100px">
        Why Choose us?
      </Typography>
      <Grid container gap={3}>
        {details.map((detail) => {
          return (
            <Grid key={detail.id} item>
              <Cards content={detail} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AboutSection;
