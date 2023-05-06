import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Feedbackpage () {

    const history = useHistory();
    const dispatch = useDispatch();

    const hereWeGoAgain = () => {
        dispatch({
            type: 'RESET',
        })
        history.push('/');
    }
    return(
        <div>
            <h2>⭐️ Feedback</h2>
            <h4>Thank You</h4>
            <button onClick={hereWeGoAgain}>Leave New Feedback</button>
        </div>
    )
    
}
export default Feedbackpage;