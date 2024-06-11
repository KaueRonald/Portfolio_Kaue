import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import styles from "./Cards.module.scss"
import NoBullying from '../../../public/imageCard/logoNB.png';
import Tridev from '../../../public/imageCard/tridevportfolio.png'
import LogoAPI from '../../../public/imageCard/LogoApi.png'
import kerigma from '../../../public/imageCard/kerigma.png'
import TypescriptIcon from '../../../public/iconsCard/TypescriptIcon.png';
import NextIcon from '../../../public/iconsCard/Next.png';
import ReactIcon from '../../../public/iconsCard/ReactIcon.png';
import MUIIcon from '../../../public/iconsCard/mui.png';
import NodeIcon from '../../../public/iconsCard/NodeIcon.png';
import PrismaIcon from '../../../public/iconsCard/PrismaIcon.png';
import DockerIcon from '../../../public/iconsCard/DockerIcon.png';
import ExpressIcon from '../../../public/iconsCard/ExpressIcon.png';
import PostgresIcon from '../../../public/iconsCard/PostgresIcon.png';
import SassIcon from '../../../public/iconsCard/sass.png';
import Image from 'next/image';

const Cards: React.FC = () => {
    return (
        <Box className={styles.container}>
            <Card className={styles.card} sx={{ maxWidth: 345, minWidth: 280 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={Tridev.src}
                    title="imagem Tridev"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Tridev Soluções
                    </Typography>
                    <Box>
                        <Image src={TypescriptIcon} alt='Typescript' />
                        <Image src={NextIcon} alt='Next' />
                        <Image src={MUIIcon} alt='MUI' />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        Site da minha empresa de freelances, projetos que faço para ter mais experiência junto com mais dois desenvolvedores.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/Luisfelippedev/tridev' target='_blank' className={styles.btns} size="small">GitHub</Button>
                    <Button href='https://www.tridev.com.br/' target='_blank' className={styles.btns} size="small">Deploy</Button>
                </CardActions>
            </Card>

            <Card className={styles.card} sx={{ maxWidth: 345, minWidth: 280 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={NoBullying.src}
                    title="imagem NoBullying"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        NoBullying Web
                    </Typography>
                    <Box>
                        <Image src={TypescriptIcon} alt='Typescript' />
                        <Image src={ReactIcon} alt='React' />
                        <Image src={MUIIcon} alt='MUI' />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        O projeto consiste em um sistema web de gerenciamento de denúncias para o NUCA (Núcleo de combate ao assédio do IFPB-CZ).
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={styles.btnPrivate} size="small" disabled>Privado</Button>
                </CardActions>
            </Card>

            <Card className={styles.card} sx={{ maxWidth: 345, minWidth: 280 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={LogoAPI.src}
                    title="imagem API Java"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        API de reserva de horário
                    </Typography>
                    <Box>
                        <Image src={NodeIcon} alt='Node' />
                        <Image src={TypescriptIcon} alt='Typescript' />
                        <Image src={PrismaIcon} alt='Prisma' />
                        <Image src={DockerIcon} alt='Docker' />
                        <Image src={ExpressIcon} alt='Express' />
                        <Image src={PostgresIcon} alt='Postgresql' />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        API de reserva/agendamento de serviços de beleza, está hospedada na plataforma render, com documentação em swagger.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/KaueRonald/reservation' target='_blank' className={styles.btns} size="small">GitHub</Button>
                    <Button href='https://reservation-api-305u.onrender.com/api-docs' target='_blank' className={styles.btns} size="small">Deploy</Button>
                </CardActions>
            </Card>

            <Card className={styles.card} sx={{ maxWidth: 345, minWidth: 280 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={kerigma.src}
                    title="imagem site Kerigma"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Site Kerigma Systems
                    </Typography>
                    <Box>
                        <Image src={TypescriptIcon} alt='Typescript' />
                        <Image src={NextIcon} alt='Next' />
                        <Image src={MUIIcon} alt='MUI' />
                        <Image src={SassIcon} alt='Sass' />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        Landign page da empresa Kerigma Systems, construida para apresentar a marca e atrair a atenção de novos clientes para a empresa.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/Luisfelippedev/kerigma-systems' target='_blank' className={styles.btns} size="small">GitHub</Button>
                    <Button href='https://www.kerigmasystems.com/' target='_blank' className={styles.btns} size="small">Deploy</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Cards;