'use client'
import React from 'react';
import styles from './rodape.module.scss'
import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify';
import { Link } from 'react-scroll';

function NotifySucessTel(): any {
    toast.success("O telefone foi copiado!")
}

function NotifySucessEmail(): any {
    toast.success("O E-mail foi copiado!")
}

function NotifyErrorTel(): any {
    toast.error("O telefone não foi copiado!")
}

function NotifyErrorEmail(): any {
    toast.error("O E-mail não foi copiado!")
}

const Rodape: React.FC = () => {

    const handleCopyPhone = () => {
        const phone = "(83) 9 9356-8182";
        navigator.clipboard.writeText(phone)
            .then(() => {
                NotifySucessTel()
            })
            .catch(err => NotifyErrorTel());
    };

    const handleCopyEmail = () => {
        const email = "kaueronald21.kr@gmail.com"; // Substitua pelo seu email
        navigator.clipboard.writeText(email)
            .then(() => {
                NotifySucessEmail()
            })
            .catch(err => NotifyErrorEmail());
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.collums}>
                <h3 className={styles.titleClass}>MENU</h3>
                <Link
                    to='home'
                    spy={true}
                    smooth={true}
                >
                    <p className={styles.line} >Home</p>
                </Link>
                <Link
                    to="QuemSou"
                    spy={true}
                    smooth={true}
                >
                    <p className={styles.line}>Quem sou</p>
                </Link>
                <Link
                    to="Diferenciais"
                    spy={true}
                    smooth={true}
                >
                    <p className={styles.line}>Skills</p>
                </Link>
                <Link
                    to="Projetos"
                    spy={true}
                    smooth={true}
                >
                    <p className={styles.line} >Projetos</p>
                </Link>
                <Link
                    to="form"
                    spy={true}
                    smooth={true}
                >
                    <p className={styles.line}>Fale comigo</p>
                </Link>
            </Box>
            <Box className={styles.collums}>
                <h3 className={styles.titleClass}>REDES SOCIAIS</h3>
                <a className={styles.line} href="https://www.instagram.com/kaueronald_/" target="_blank"> <InstagramIcon /> &nbsp; Instagram</a>
                <a className={styles.line} href="https://www.linkedin.com/in/kau%C3%AA-ronald-981a8a216/" target="_blank"> <LinkedInIcon /> &nbsp; Linkedin</a>
                <a className={styles.line} href="https://github.com/KaueRonald" target="_blank"> <GitHubIcon /> &nbsp; GitHub</a>
            </Box>
            <Box className={styles.collums}>
                <h3 className={styles.titleClass}>CONTATOS</h3>
                <span className={styles.line} onClick={handleCopyPhone}> <ContentCopyIcon /> &nbsp;9 9356-8182</span>
                <span className={styles.line} onClick={handleCopyEmail}> <ContentCopyIcon /> &nbsp;E-mail</span>
            </Box>
        </Box>
    )
}

export default Rodape;