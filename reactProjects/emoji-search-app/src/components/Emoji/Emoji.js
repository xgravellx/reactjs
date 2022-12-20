import { useEffect, useState } from 'react'
import { Styled } from './Emoji.styled'
import { filterEmojis } from '../../utils/filterEmoji';
import Table from '../Table/Table';

const Emoji = ({emojisData, searchText}) => {
    
    const [filteredEmoji, setFilteredEmoji] = useState([]);
    
    useEffect(() => {
        setFilteredEmoji(filterEmojis({
            emojisData,
            searchText,
        }))
    }, [emojisData, searchText]);


  return (
    <Styled>
        {filteredEmoji.map((data, index) => (
            <Table key={index} emojiTitle= {data.title} emojiSymbol= {data.symbol} />
        ))}
        
    </Styled>
  )
}


export default Emoji