const INITIAL_STATE = {mood:"(￣ー￣)ゞ"};

const moodReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case "HAPPY":
            return {...state,mood:"^ㅂ^"}
        case "SAD":
            return {...state,mood:"⊙︿⊙"}
        case "ANGRY":
            return {...state,mood:"ノಠ_ಠノ"}
        case "CONFUSED":
            return {...state,mood:"ಠ_ರೃ"}
    }
    return state
}

const store = Redux.createStore(moodReducer);