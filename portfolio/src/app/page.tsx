import { Box } from "@mui/material";
import styles from "./page.module.scss";
import NavBar from "../components/NavBar/index";

export default function Home() {
  return (
    <Box className={styles.container}>
      <NavBar />
    </Box>
  );
}
