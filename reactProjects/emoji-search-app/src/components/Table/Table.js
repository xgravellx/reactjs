import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import { Styled } from './Table.styled'

const Table = ({emojiTitle, emojiSymbol}) => {
  return (
    <Styled>
        <table>
            <tbody>
                <tr >
                    <th scope="row">
                        {emojiSymbol}
                    </th>
                    <td>
                        {emojiTitle}
                    </td>
                </tr>
            </tbody>
        </table>

    </Styled>
  )
}

export default Table