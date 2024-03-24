import { Box, Button } from "@mui/material";
import Image from "next/image";
import kaue from "../../public/kaueR.jpeg"
import styles from "./page.module.scss";
import NavBar from "../components/NavBar/index";
import MouseIcon from '@mui/icons-material/Mouse';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ComputerIcon from '@mui/icons-material/Computer';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Carousell from "../components/Carousel/index"
import Cards from "@/components/Cards";
import Form from "@/components/Form";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <Box id="home" className={styles.container}>
      <NavBar />

      <Box className={styles.sectionOne}>
        <Box className={`${styles.fadein}`}>
          <h1 className={styles.title}>Olá, sou Kauê Ronald <br /> Desenvolvedor de Sistemas</h1>
        </Box>
        <p className={styles.subTitle}>Graduado em Análise e Desenvolvimento de Sistemas.</p>
        <Box className={styles.btnsSection}>
          <Button href="#form" className={styles.btns} variant="outlined">Contate-me</Button>
          <a href="https://drive.google.com/file/d/1K6-WxCLGqeG5OTzbQKhy7TyNLO7oTCCv/view?usp=drive_link" target="_blank"><Button variant="outlined" className={styles.btns}>Currículo</Button></a>
        </Box>
        <MouseIcon id="QuemSou" className={`${styles.iconMouse} ${styles.saltitar}`} fontSize="large" />
        <KeyboardDoubleArrowDownIcon className={`${styles.iconScroll} ${styles.saltitar}`} fontSize="large" />
      </Box>
      {/* seção dois */}
      <Box className={styles.sectionTwo}>
        <Box className={styles.ContainerSection}>
          <Box className={styles.ContainerAbout}>
            <Box className={styles.iconAspas}>
              <FormatQuoteIcon fontSize="large" /> C I T A Ç Ã O
            </Box>
            <p className={styles.DescAbout}> Qualquer um pode escrever um código que o computador entenda.
              Bons programadores escrevem códigos que os humanos entendam.
            </p>
            <Box className={styles.iconAspasTwo}>
              - Martin Fowler <FormatQuoteIcon fontSize="large" />
            </Box>
          </Box>
          <Box className={styles.ContainerTitle}>
            <Image className={styles.imgPerfil} src={kaue} alt="foto_perfil" />
          </Box>
          <Box className={styles.ContainerAbout}>
            <h1 className={styles.iconsABout}> <VideogameAssetIcon fontSize="large" /> <CatchingPokemonIcon fontSize="large" /> <ComputerIcon fontSize="large" /> </h1>
            <p className={styles.DescAbout}>Um Gamer entusiasta de jogos, cultura geek e tecnologia.</p>
            <br />
            <p className={styles.DescAbout}>Sou um Desenvolvedor de Sistemas por formação,
              sempre gostei de trabalhar em equipes multidisciplinares com planejamento estratégico e
              bastante responsabilidades. Esse são alguns dos diferenciais que levo
              na minha jornada como Dev, além de minhas habilidades técnicas.</p>
            <br />
            <p className={styles.DescAbout} >Trabalho com desenvolvimento fullstack, criando sistemas de ponta a ponta e
              busco uma oportunidade de ingressar no mercado de trabalho.</p>
          </Box>
        </Box>
        <Box id="Diferenciais" className={styles.ContainerTitleTech}>
          <h1 className={styles.TitleTech}> MINHAS SKILLS</h1>
        </Box>
      </Box>
      {/* seção três */}
      <Box className={styles.sectionThree}>
        <Carousell />
        <Box className={styles.ContainerTitleProjects}>
          <h1 id="Projetos" className={styles.TitleProjects}> MEUS PROJETOS</h1>
        </Box>
      </Box>

      {/* seção Quatro */}
      <Box className={styles.sectionFour}>
        <Cards />
      </Box>

      {/* seção Cinco */}
      <Box id="form" className={styles.sectionFive}>
        <Box className={styles.ContainerTitleContact}>
          <h1 className={styles.TitleContact}> FALE COMIGO</h1>
          <span className={styles.InfoContact}>Preencha os campos abaixo com os seguintes dados que em breve retornarei seu contato.</span>
        </Box>
        <Box className={styles.ContainerForm}>
          <Form />
        </Box>
      </Box>

      {/* seção Seis */}
      <Box className={styles.sectionSix}>
        <hr className={styles.hrline} color="#00a7b5" />
        <Rodape />
        <Box className={styles.credits}>
          Copyright © 2024 Kauê Ronald
        </Box>
      </Box>
    </Box >
  );
}
