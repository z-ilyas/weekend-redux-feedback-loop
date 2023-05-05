import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Feelings() {

    const [ feelings, setfeelings] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const newFeelings = () => {
        dispatch({
            type: 'ADD_FEELINGS',
            payload: feelings
        })
        history.push('/Understanding');
    }
    
    return (
        <div className="feelings">
            <h1>How are you Feeling today?</h1>
            <p>Feeling?</p>
            <input
                type="number"
                value={feelings}
                onChange={ (event) => {setfeelings(event.target.value)}}
            />
            <button onClick={newFeelings}>NEXT</button>
        </div>
    )
}

export default Feelings;