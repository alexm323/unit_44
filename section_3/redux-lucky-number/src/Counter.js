import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions'
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    const up = () => dispatch(increment())
    const down = () => dispatch(decrement())
    return(
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={down}> - </button>
            <button onClick={up}> + </button>
            
        </div>
    )
}
export default Counter;