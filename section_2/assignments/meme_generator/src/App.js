import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Meme from './Meme';
import MemeForm from './MemeForm';

function App() {
  const memes = useSelector(state => state.memes);
  const dispatch = useDispatch();

  const addMeme = (memeData) => {
    dispatch({type:"ADD_MEME", meme:memeData})
  }
  const deleteMeme = (memeId) => {
    dispatch({type:"REMOVE_MEME", id:memeId})
  }

  const memeArsenal = memes.map(meme => (
    <Meme key={meme.id} topText = {meme.topText} bottomText={meme.bottomText} imgUrl = {meme.imgUrl} deleteMeme={ () => deleteMeme(meme.id)}/>
  ))
  return (
    <div className="App">
      <header className="App-header">
        {/* <Meme topText ="React redux is so fun" bottomText="I cant think of a meme" imgUrl="https://upload.wikimedia.org/wikipedia/en/2/2b/Bad_Luck_Brian.jpg" deleteMeme={deleteMeme}/> */}
      <MemeForm addMeme={addMeme}/>
      {memeArsenal}
      </header>
    </div>
  );
}

export default App;
