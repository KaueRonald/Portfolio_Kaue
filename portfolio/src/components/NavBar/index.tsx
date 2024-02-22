import { Box, Button } from "@mui/material";
import styles from "./NavBar.module.scss"

const NavBar = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.sectionOne}>
                <Button className={styles.btn}>option 1</Button>
            </Box>
            <Box className={styles.sectionTwo}>
                <Button className={styles.btn}>option 2</Button>
            </Box>
        </Box>
    )
}

export default NavBar;