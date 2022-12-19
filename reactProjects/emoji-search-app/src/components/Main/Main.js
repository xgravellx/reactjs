import {useEffect, useState} from 'react'
import { Styled } from './Main.styled'
import Loader from '../Loader/Loader'
import axios from 'axios';
import Table from '../Table/Table';

const Main = () => {
  const [emoji, setEmoji] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28')
      .then(res => setEmoji(res.data))
      .finally(setLoading(false))
  }, [])

  const handleSearchEmoji = () => {
    setSearchText(evet.target.value);
  }
  console.log(searchText);

  return (
    <Styled>
      {loading && <Loader />}
      {emoji.map((emojis) => (
        <Table key={emojis.title} emojiTitle= {emojis.title} emojiSymbol= {emojis.symbol}/>
      ))}
    </Styled>
  )
}

export default Main