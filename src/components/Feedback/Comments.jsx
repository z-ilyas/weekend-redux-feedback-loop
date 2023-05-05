import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Comments () {
    const [comments, setComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const goToReview = () => {
        if(comments === ''){
            Swal.fire({
                icon: 'error',
                title: 'PLEASE PUT INPUT',
              })
        }else{
            dispatch({
                type: 'ADD_COMMENTS',
                payload: comments
            })
            history.push('/Review');
        }
    }
    return(
        <div className="Comments">
            <h1>Any Comments you want to leave?'</h1>
            <p>Comments</p>
            <input 
                type="text"
                value={comments}
                onChange={(event) => {setComments(event.target.value)}}
            />
            <button onClick={goToReview}>NEXT</button>
        </div>
    )
    
}
export default Comments;