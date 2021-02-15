const h1 = document.querySelector("h1");
const happyBtn = document.querySelector("#happy")
const sadBtn = document.querySelector("#sad")
const angryBtn = document.querySelector("#angry")
const confusedBtn = document.querySelector("#confused")

h1.innerText = store.getState().mood

happyBtn.addEventListener('click',function(e){
    store.dispatch({type:"HAPPY"})
    const state = store.getState();
    h1.innerText = state.mood
})
sadBtn.addEventListener('click',function(e){
    store.dispatch({type:"SAD"})
    const state = store.getState();
    h1.innerText = state.mood
})
angryBtn.addEventListener('click',function(e){
    store.dispatch({type:"ANGRY"})
    const state = store.getState();
    h1.innerText = state.mood
})
confusedBtn.addEventListener('click',function(e){
    store.dispatch({type:"CONFUSED"})
    const state = store.getState();
    h1.innerText = state.mood
})