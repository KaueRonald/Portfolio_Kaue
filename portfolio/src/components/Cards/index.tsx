import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import styles from "./Cards.module.scss"
import NoBullying from '../../../public/imageCard/logoNB.png';
import PortifolioLogo from '../../../public/imageCard/KRportifolio.png'
import LogoAPI from '../../../public/imageCard/LogoApi.png'
import TypescriptIcon from '../../../public/iconsCard/TypescriptIcon.png';
import NextIcon from '../../../public/iconsCard/Next.png';
import ReactIcon from '../../../public/iconsCard/ReactIcon.png';
import MUIIcon from '../../../public/iconsCard/mui.png';
import JavaIcon from '../../../public/iconsCard/JavaIcon.png';
import SpringIcon from '../../../public/iconsCard/SpringIcon.png';
import Image from 'next/image';

const Cards: React.FC = () => {
    return (
        <Box className={styles.container}>
            <Card className={styles.card} sx={{ maxWidth: 345, minWidth: 280 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={PortifolioLogo.src}
                    title="imagem portifolio"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Portifólio Kauê Ronald
                    </Typography>
                    <Box>
                        <Image src={TypescriptIcon} alt='Typescript' />
                        <Image src={NextIcon} alt='Next' />
                        <Image src={MUIIcon} alt='MUI' />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        O meu portfólio reflete uma parte significativa da minha identidade e das minhas experiências na minha carreira como programador.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/KaueRonald/Portfolio_Kaue' target='_blank' className={styles.btns} size="small">GitHub</Button>
                    <Button href='#home' className={styles.btns} size="small">Deploy</Button>
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
                        Todo List Java - API
                    </Typography>
                    <Box>
                        <Image src={JavaIcon} alt='Typescript' />
                        <Image src={SpringIcon} alt='React' />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        API construída no desenvolver do Curso de Java da empresa Rocketseat! Onde reafirmei conhecimentos de Java com Spring.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/KaueRonald/todolistjava' target='_blank' className={styles.btns} size="small">GitHub</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Cards;