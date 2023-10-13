import styles from "./Hero.module.css";
import * as React from "react";

import { ReactComponent as HeroImage } from "../../assets/HeroImage.svg";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export default function Hero() {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.box}>
        <Box className={styles.text}>
          <p className={styles.para1}>You don't have to</p>
          <p className={styles.para2}>Fight them Alone</p>
        </Box>
        <Box className={styles.text2}>
          <p className={styles.para3}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </Box>

        <div className={styles.button}>
          <Box className={styles.mailBox}>
            <MessageIcon />
            <input type="text" className={styles.mailText} />
          </Box>
          <button className={styles.talkButton}>Let's Talk</button>
        </div>
      </Box>
      <div className={styles.imageWrapper}>
        <HeroImage />
      </div>
    </Box>
  );
}
