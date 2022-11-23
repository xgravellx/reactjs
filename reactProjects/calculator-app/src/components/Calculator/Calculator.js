import React, { useState } from 'react'
import { Styled } from './Calculator.styled'

const Calculator = () => {
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState();

    const inputNumber = (e) => {
        let inputNum = e.target.value;
        if (number === 0) {
            setNumber(inputNum);
        }
        else {
            setNumber(number + inputNum);
        }
    }

    const clear = () => {
        setNumber(0);
    }

    const porcentagem = () => {
        setNumber(number / 100);
    }

    const changeSign = () => {
        if (number > 0) setNumber(-number);
        else setNumber(Math.abs(number));
    }

    const handleOperator = (e) => {
        let operatorInput = e.target.value;
    }
  return (
    <Styled>

    </Styled>
  )
}

export default Calculator