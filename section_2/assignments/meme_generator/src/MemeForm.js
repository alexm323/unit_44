import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_FORM_STATE = {
    topText:"",
    bottomText:"",
    imgUrl:""
};

const MemeForm = ({addMeme}) => {
    const [form,setForm] = useState(INITIAL_FORM_STATE);

    function handleSubmit(e){
        e.preventDefault();
        addMeme({...form,id:uuid()});
        setForm(INITIAL_FORM_STATE);
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(formData => ({ ...formData, [name]: value }));
    }
    
    return (
        <div>
            <h1>Meme-o-matic Redux</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="imgUrl">Image URL</label>
                <input 
                name="imgUrl" 
                type="text" 
                onChange={handleChange}
                id="imgUrl"
                value={form.imgUrl}
                />
                <label htmlFor="topText">Top Text</label>
                <input 
                name="topText" 
                type="text" 
                onChange={handleChange}
                id="topText"
                value={form.topText}
                />
                <label htmlFor="bottomText">Bottom Text</label>
                <input 
                name="bottomText" 
                type="text" 
                onChange={handleChange}
                id="bottomText"
                value={form.bottomText}
                />
                <button>Make a meme</button>
            </form>
        </div>
    )
    
}

export default MemeForm;