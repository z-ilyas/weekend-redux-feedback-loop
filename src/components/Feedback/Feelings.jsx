import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Feelings() {
    
    // const feelingsObj = useSelector(state => state.feelings);
    const [feelings, setfeelings] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const noInput = () => {
        if( feelings === ''){
            Swal.fire({
                icon: 'error',
                title: 'PLEASE PUT INPUT',
              })
        }else{
            dispatch({
                type: 'ADD_FEELINGS',
                payload: feelings
            })
            history.push('/Understanding');
            noInput();
        }
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
            <button onClick={noInput}>NEXT</button>
        </div>
    )
}

export default Feelings;