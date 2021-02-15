import React from 'react';

const Meme = ({topText,bottomText,imgUrl,id, deleteMeme}) => {
    const handleDelete = () => {
        deleteMeme(id)
    }
    return(
        <div style={{width:"200px"}} className="meme-container">
            <span className="top-text">{topText}</span>
            <img src={imgUrl} alt="custom meme"/>
            <span className="bottom-text">{bottomText}</span>
            <button onClick={handleDelete}>Delete Meme</button>
        </div>
    )
}

export default Meme;

