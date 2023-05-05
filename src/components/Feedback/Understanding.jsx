import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Understanding () {

    const [understanding, setunderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const clickNext = () => {
        if( understanding === ''){
            Swal.fire({
                icon: 'error',
                title: 'PLEASE PUT INPUT',
              })
        }else{
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understanding
            })
            history.push('/Support');
        }
    }

    return(
        <div className="Understanding">
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>
            <input
                type="number"
                value={understanding}
                onChange={(event) => {setunderstanding(event.target.value)}}
            />
            <button onClick={clickNext}>NEXT</button>     
        </div>
    )
    
}
export default Understanding;