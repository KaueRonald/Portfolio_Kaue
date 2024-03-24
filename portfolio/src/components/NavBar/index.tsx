'use client'

import { Box, Button, Menu, MenuItem } from "@mui/material";
import styles from "./NavBar.module.scss"
import Image from "next/image";
import logo from "../../../public/logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from "react";


const NavBar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Box className={styles.container}>
            <Box className={styles.sectionOne}>
                <a href="/"><Image className={styles.img} src={logo} alt="logo" width={64} height={64} /></a>
            </Box>
            <Box className={styles.sectionTwo}>
                <a href="https://www.instagram.com/kaueronald_/" target="_blank"><InstagramIcon className={styles.icons} /></a>
                <a href="https://www.linkedin.com/in/kau%C3%AA-ronald-981a8a216/" target="_blank"><LinkedInIcon className={styles.icons} /></a>
                <a href="https://github.com/KaueRonald" target="_blank"><GitHubIcon className={styles.icons} /></a>
                <Button variant="outlined" className={styles.btnMenu} onClick={handleOpen}><MenuIcon /></Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <a className={styles.linkMenu} href="https://www.instagram.com/kaueronald_/" target="_blank"><MenuItem onClick={handleClose}><InstagramIcon />&nbsp;Instagram</MenuItem></a>
                    <a className={styles.linkMenu} href="https://www.linkedin.com/in/kau%C3%AA-ronald-981a8a216/" target="_blank"><MenuItem onClick={handleClose}><LinkedInIcon />&nbsp;Linkedin</MenuItem></a>
                    <a className={styles.linkMenu} href="https://github.com/KaueRonald" target="_blank"><MenuItem onClick={handleClose}><GitHubIcon />&nbsp;GitHub</MenuItem></a>
                    
                </Menu>
            </Box>
        </Box>
    )
}

export default NavBar;