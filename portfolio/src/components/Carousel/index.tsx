'use client'
import { Box } from '@mui/material';
import React from 'react';
import styles from "../Carousel/Carousel.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

const Carousell: React.FC = () => {
    return (
        <Box className={styles.container}>
            <Carousel className={styles.Carrousel} showThumbs={false} interval={14000} showStatus={false}
                autoPlay infiniteLoop showArrows={false} showIndicators={true}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = { marginLeft: 20, color: 'white', cursor: 'pointer' };
                    const style = isSelected
                        ? { ...defStyle, color: '#00a7b5' }
                        : { ...defStyle, color: '#080C1C' };
                    return (
                        <span
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                        >
                            {'●'}
                        </span>
                    );
                }}
            >
                <Box >
                    <h2 className={styles.TitleCarrousel}>D I F E R E N C I A I S</h2>
                    <Box className={styles.ContentOne}>
                        <ImportantDevicesIcon className={styles.iconMui} />
                        <Box>
                            <h4 className={styles.Title}>Interfaces de qualidade</h4>
                            <p className={styles.text}>Trabalho com interfaces de usuário fiéis ao protótipo,
                                visando proporcionar uma experiência excepcional aos usuários, com navegação fluida e intuitiva.</p>
                        </Box>
                    </Box>
                </Box>

                <Box >
                    <h2 className={styles.TitleCarrousel}>D I F E R E N C I A I S</h2>
                    <Box className={styles.ContentOne}>
                        <DevicesOtherIcon className={styles.iconMui} />
                        <Box>
                            <h4 className={styles.Title}>Suporte Multiplataforma</h4>
                            <p className={styles.text}>Desenvolvimento de interfaces que funcionam perfeitamente em uma variedade de dispositivos e tamanhos de tela, 
                            garantindo uma experiência consistente em desktops, tablets e smartphones.</p>
                        </Box>
                    </Box>
                </Box>

                <Box >
                    <h2 className={styles.TitleCarrousel}>D I F E R E N C I A I S</h2>
                    <Box className={styles.ContentOne}>
                        <FactCheckIcon className={styles.iconMui} />
                        <Box>
                            <h4 className={styles.Title}>Testes Extensivos</h4>
                            <p className={styles.text}>Realização de testes abrangentes, incluindo testes de unidade, 
                            integração e aceitação, para garantir a qualidade e estabilidade do produto em todas as fases do desenvolvimento.</p>
                        </Box>
                    </Box>
                </Box>

                <Box >
                    <h2 className={styles.TitleCarrousel}>D I F E R E N C I A I S</h2>
                    <Box className={styles.ContentOne}>
                        <CalendarMonthIcon className={styles.iconMui} />
                        <Box>
                            <h4 className={styles.Title}>Gestão de Projeto</h4>
                            <p className={styles.text}>Adotar abordagens tradicionais, como o Modelo Cascata, 
                            ou também metodologias ágeis, dependendo das necessidades e características do projeto.</p>
                        </Box>
                    </Box>
                </Box>

            </Carousel>
            <Carousel className={styles.Carrousel} showThumbs={false} interval={14000} showStatus={false}
                autoPlay infiniteLoop showArrows={false} showIndicators={true}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = { marginLeft: 20, color: 'white', cursor: 'pointer' };
                    const style = isSelected
                        ? { ...defStyle, color: '#00a7b5' }
                        : { ...defStyle, color: '#080C1C' };
                    return (
                        <span
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                        >
                            {'●'}
                        </span>
                    );
                }}
            >
                <Box >
                    <h2 className={styles.TitleCarrousel}>C O N Q U I S T A S</h2>
                    <Box className={styles.ContentOne}>
                        <WorkIcon className={styles.iconMui} /> 
                        <Box>
                            <h4 className={styles.Title}>Loopis - Soluções Tecnológicas</h4>
                            <p className={styles.text}>Tive a oportunidade de trabalhar 2 anos na empresa Júnior do IFPB- campus CZ. 
                            Onde na área de projetos participei de projetos reais para clientes da empresa, onde eu adquiri conhecimento e coloquei em prática. </p>
                        </Box>
                    </Box>
                </Box>

                <Box >
                    <h2 className={styles.TitleCarrousel}>C O N Q U I S T A S</h2>
                    <Box className={styles.ContentOne}>
                        <Diversity3Icon className={styles.iconMui} />
                        <Box>
                            <h4 className={styles.Title}>Congresso da SBC</h4>
                            <p className={styles.text}>Tive a incrível oportunidade de networking no CSBC (Congresso da Sociedade Brasileira de Computação) 
                            em conjunto com a Expotec, um evento que reuniu entusiastas da área da computação de todo o Brasil. </p>
                        </Box>
                    </Box>
                </Box>

                <Box >
                    <h2 className={styles.TitleCarrousel}>C O N Q U I S T A S</h2>
                    <Box className={styles.ContentOne}>
                        <CastForEducationIcon className={styles.iconMui} />
                        <Box>
                            <h4 className={styles.Title}>Bolsista CNPQ - NoBullying</h4>
                            <p className={styles.text}>Idealizei e desenvolvi o projeto NoBullying com dois colegas. 
                            Um projeto inovador para o NUCA (Núcleo de combate ao asséio) IFPB-CZ é um sistema de gerenciamento e denúncias de bullying e assédio. </p>
                        </Box>
                    </Box>
                </Box>
            </Carousel>
        </Box>
    )
}

export default Carousell;