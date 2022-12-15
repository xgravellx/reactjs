import {useEffect, useState} from 'react'
import { Styled } from './Main.styled'
import Loader from '../Loader/Loader'
import axios from 'axios';
import Emoji from '../Emoji/Emoji';

const Main = () => {
  const [emoji, setEmoji] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    async function fetchEmoji() { 
      try {
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28')
        setEmoji(res.data)
        setLoading(false)
      } catch(err) {
        setLoading(true);
      }
     }
     fetchEmoji();
    }, [])

    const handleSearchEmojis = (event) => {
      setSearchText(event.target.value);
    }
    console.log(searchText);


  return (
    <Styled>
      {loading && <Loader />}
      {emoji.length > 0 && <Emoji emojisData={emoji} searchText={searchText}/>}
    </Styled>
  )
}

export default Main