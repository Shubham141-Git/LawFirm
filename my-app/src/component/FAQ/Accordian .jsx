import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box } from "@mui/material";
import styles from "./Acc.modules.css";

export default function BasicAccordion({ data }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          className={styles.acc}
          expandIcon={
            <Avatar sx={{ height: "28px", width: "28px", bgcolor: "#E3B748;" }}>
              <Box sx={{ color: "black" }}>+</Box>
            </Avatar>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "24px" /* 74.532px */,
            }}
          >
            {data.summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#585858",
              fontFamily: "Inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "162.523%;" /* 74.532px */,
            }}
          >
            `{data.details}`
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
