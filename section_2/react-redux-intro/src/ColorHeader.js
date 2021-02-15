import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


const ColorHeader = () => {
    const dispatch = useDispatch()
    const color = useSelector(store => store.color)
    console.log("Color Header", color)
    return (
        <div>
            <h1 style={{color}}>Color is: {color}</h1>
        </div>
    )
}

export default ColorHeader;