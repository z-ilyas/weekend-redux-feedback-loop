import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Support () {
    const [support, setSupport] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const goToComments = () => {
        if(support === ''){
            Swal.fire({
                icon: 'error',
                title: 'PLEASE PUT INPUT',
              })
        }else{
            dispatch({
                type: 'ADD_SUPPORT',
                payload: support
            })
            history.push('/Comments');
        }
    }
    return(
        <div className="Support">
            <h1>How well are you being supported?</h1>
            <p>Support?</p>
            <input 
                type="number"
                value={support}
                onChange={(event) => {setSupport(event.target.value)}}
            />
            <button onClick={goToComments}>NEXT</button>
        </div>
    )
}
export default Support;