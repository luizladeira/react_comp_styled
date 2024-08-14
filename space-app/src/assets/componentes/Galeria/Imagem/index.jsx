import { styled } from "styled-components"
import iconeFavorito from "./favorito.svg"
import iconeMaximizar from "./maximizar.svg"

const FotoContainer = styled.div`
    display: inline-flex;
    gap: 10px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 90%;
    margin: 0 0 15px 0; 
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const FonteEsterizada = styled.legend`
display: flex;
margin: 10px 0px 0px; 
`

const Fotter = styled.footer`
    display: flex;
    float:right;
    align-items: left;
`

const ButtonFav = styled.button`
    display: initial;
    color:red;
    padding:auto;
    box-sizing: border-box;
`


const Imagem = ({ foto, titulo, path, fonte }) => {
    return (
        <FotoContainer>

            <Figure>
                <img src={foto} alt={titulo} title={titulo} />
                <figcaption>
                    <h3>{titulo}</h3>
                    <FonteEsterizada>{fonte}</FonteEsterizada>
                    <Fotter>
                        <ButtonFav>
                            <img src={iconeFavorito} />
                        </ButtonFav>
                        <ButtonFav>
                            <img src={iconeMaximizar} />
                        </ButtonFav>
                    </Fotter>
                </figcaption>
            </Figure>
        </FotoContainer>
    )
}

export default Imagem