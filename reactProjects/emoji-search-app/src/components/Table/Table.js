import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import { Styled } from './Table.styled'

const Table = ({emojiTitle, emojiSymbol, searchText}) => {
  

  return (
    <Styled>
        <div>{emojiSymbol}</div>
        <div>{emojiTitle}</div>
    </Styled>
  )
}

export default Table