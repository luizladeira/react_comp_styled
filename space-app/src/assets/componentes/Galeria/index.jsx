import { styled } from "styled-components"
import Titulo from "../Titulo"
import Imagem from "./Imagem"
import Populares from "./Populares"
import Tags from "./Tags"

const GaleriaContainer = styled.div`
display:flex;
`

const SecaoFluida = styled.section`
flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    {fotos.map(foto => <Imagem key={foto.id} foto={foto.path} titulo={foto.titulo} fonte={foto.fonte} />)}
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria