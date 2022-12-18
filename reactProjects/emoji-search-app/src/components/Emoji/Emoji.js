import {useEffect, useState} from 'react'
import { Styled } from './Emoji.styled'
import PropsType from 'prop-types'
import { filterEmojis } from '../../utils/filterEmoji';

const Emoji = ({emojisData}) => {
    const [filteredEmoji, setFilteredEmoji] = useState([]);

    useEffect(() => {
        setFilteredEmoji(filterEmojis({
            emojisData,
        }))
    }, []);


  return (
    <Styled>
        <ul>
            {filteredEmoji.map((data, index) => {
                <li key={index}>{data.title}</li>
            })}
        </ul>
    </Styled>
  )
}

Emoji.PropsType = {
    emojisData: PropsType.array,
}

export default Emoji