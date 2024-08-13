import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style:none;
    padding:0;
    margin: 0;
    width: 100%;
`;

/*
const ItemNavegacao = styled.li`
    
`;
*/

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao iconeativo="/icones/home-ativo.png" iconeinativo="/icones/home-inativo.png" ativo={true}>
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao iconeativo="/icones/mais-vistas-ativo.png" iconeinativo="/icones/mais-vistas-inativo.png" >
                        Mais Vistos
                    </ItemNavegacao>
                    <ItemNavegacao iconeativo="/icones/mais-curtidas-ativo.png" iconeinativo="/icones/mais-curtidas-inativo.png">
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao iconeativo="/icones/novas-ativo.png" iconeinativo="/icones/novas-inativo.png">
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao iconeativo="/icones/surpreenda-me-ativo.png" iconeinativo="/icones/surpreenda-me-inativo.png">
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    );
}

export default BarraLateral;