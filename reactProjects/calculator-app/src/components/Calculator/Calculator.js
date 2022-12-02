import React, { useState } from 'react'
import { Styled } from './Calculator.styled'
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

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
        setOperator(operatorInput);
        setOldNumber(number);
        setNumber(0);
    }

    const calculate = () => {
        if ( operator === '/' ) {
            setNumber(parseFloat(oldNumber) / parseFloat(number))
        }
        else if ( operator === 'X' ) {
            setNumber(parseFloat(oldNumber) * parseFloat(number))
        }
        else if ( operator === '-' ) {
            setNumber(parseFloat(oldNumber) - parseFloat(number))
        }
        else if ( operator === '+' ) {
            setNumber(parseFloat(oldNumber) + parseFloat(number))
        }
    }

  return (
    <Styled>
        <Box m={5} />
        <Container>
            <div className='wrapper'>
                <Box m={12} />
                <h1 className='resultado'>{number}</h1>
                <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    {/* tem um bug com o botão de porcentagem, pois é exibido um numero muito grande e não cabe na calculadora */}
                    <button onClick={porcentagem}>%</button>
                    <button className='orange' onClick={handleOperator} value={'/'}>/</button>
                    <button className='grey' onClick={inputNumber} value={7}>7</button>
                    <button className='grey' onClick={inputNumber} value={8}>8</button>
                    <button className='grey' onClick={inputNumber} value={9}>9</button>
                    <button className='orange' onClick={handleOperator} value={'X'}>X</button>
                    <button className='grey' onClick={inputNumber} value={4}>4</button>
                    <button className='grey' onClick={inputNumber} value={5}>5</button>
                    <button className='grey' onClick={inputNumber} value={6}>6</button>
                    <button className='orange' onClick={handleOperator} value={'-'}>-</button>
                    <button className='grey' onClick={inputNumber} value={1}>1</button>
                    <button className='grey' onClick={inputNumber} value={2}>2</button>
                    <button className='grey' onClick={inputNumber} value={3}>3</button>
                    <button className='orange' onClick={handleOperator} value={'+'}>+</button>
                    <button className='grey' onClick={inputNumber} value={0}>0</button>
                    <button style={{visibility: "hidden"}}>k</button> {/* Esse componente serve apenas para preencher um espaço em branco e ficar escondido, não delete ele */}
                    <button className='grey' onClick={inputNumber} value={"."}>,</button>
                    <button className='orange' onClick={calculate}>=</button>
            </div>
        </Container>
    </Styled>
  )
}

export default Calculator