const INITIAL_STATE = {count:0};

const countReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {...state, count:state.count +1}
        case 'DECREMENT':
            return {...state, count:state.count -1}
        case 'RESET':
            return{...state,count:0}
        case 'MULTIPLY':
            return {...state,count:state.count * action.payload}
        default:
            return state
    }
    // if(action.type === 'LOG_STATE'){
    //     console.log("HERE IS YOUR STATE:",state)
    //     return state;
    // }
    // if action not matched 
    return state;
}

const store = Redux.createStore(countReducer);
