import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


const SecondCounter = () => {
    const dispatch = useDispatch()
    const count = useSelector(store => store.count)
    console.log("Second counter", count)
    const increment = () => dispatch({type:"INCREMENT"})
    const decrement = () => dispatch({type:"DECREMENT"})

    return (
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
        </div>
    )
}

export default SecondCounter;