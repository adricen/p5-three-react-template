import React, { useState } from 'react'
import { useValues, useActions } from 'kea'
import { counterLogic } from './counterLogic'
import '../css/style.sass'

export const Counter = () => {
    const { count } = useValues(counterLogic)
    const { incrementCounter, decrementCounter, updateCounter } = useActions(counterLogic)

    const [inputValue, setInputValue] = useState(0)

    return (
        <div>
            <h3>{count}</h3>
            <div>
                <button style={{pointerEvents: 'auto'}} onClick={incrementCounter}>+</button>
                <button style={{pointerEvents: 'auto'}} onClick={decrementCounter}>-</button>
            </div>
            <br />
            <div>
                <input style={{pointerEvents: 'auto'}} type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
                <button style={{pointerEvents: 'auto'}} onClick={() => updateCounter(inputValue)}>Update Value</button>
            </div>
        </div>
    )
}
