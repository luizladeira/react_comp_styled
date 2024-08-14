import { styled } from 'styled-components';
import tags from './Json/tags.json'


const TagsEstilizado = styled.section`
    display: flex;
    gap: 60px;
    align-items: center;
    color: #D9D9D9;
    font-size: 24px;
    line-height: 28.8px;
    font-weight: 400;
`;

const BotoesTags = styled.div`
    display: flex;
    gap: 10px;
`
const BotaoTag = styled.button`
    background: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    text-align: center;
    border-radius: 10px;
    border: none;
    padding: 10px 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
      border: 2px solid #C98CF1;
    }
`

const Tags = () => {
    return (
        <TagsEstilizado>
            <p>Busque por Tags:</p>
            <BotoesTags >
                {tags.map(tag => <BotaoTag key={tag.id}>{tag.titulo}</BotaoTag>)}
            </BotoesTags>
        </TagsEstilizado>
    )
}

export default Tags;