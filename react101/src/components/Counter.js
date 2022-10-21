import React, { useEffect, useState } from 'react'

function Counter() {
    
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
    
    /* Her state güncellendiğinde log alırız */
    useEffect(() => {    
        let interval =  setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [])

/*     useEffect(() => {
        console.log('component mount edildi')
    }, [])

    useEffect(() => {
        console.log('count state değişti.')
    }, [count])

    useEffect(() => {
        console.log('count veya amount state değişti.')
    }, [count, amount]) */

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + amount)}>Arttır</button>
        <button onClick={() => setAmount(1)}>+1</button>
        <button onClick={() => setAmount(3)}>+3</button>
        <button onClick={() => setAmount(10)}>+10</button>
    </div>
  )
}

export default Counter