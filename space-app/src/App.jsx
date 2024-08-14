import { styled } from "styled-components";
import Banner from "./assets/componentes/Banner";
import BarraLateral from "./assets/componentes/BarraLateral";
import Cabecalho from "./assets/componentes/Cabecalho";
import EstilosGlobais from "./assets/componentes/EstilosGlobais";
import Galeria from "./assets/componentes/Galeria";
import backgroundImage from '/imagens/banner.png';
import fotos from '../json/fotos.json';
import { useState } from "react";


const FundoGradiante = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;

`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display:flex;
  gap: 84px;
`

const ConteudoGaleria = styled.section`
  display:flex;
  flex-direction: column;
  flex-grow: 1; 
`


const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);

  return (
    <FundoGradiante>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner texto="A galeria mais completa de fotos" backgroundImage={backgroundImage} />
            <Galeria fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiante>
  )
}

export default App
