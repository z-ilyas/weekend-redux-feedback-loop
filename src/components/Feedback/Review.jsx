import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Review () {

    const feedback = useSelector(state => state.feedback);
    const history = useHistory();

    const prettySure = () => {
        axios({
            method: 'POST',
            url:'/Review', 
            data: { 
                feedback
            }})
            .then(response => {  
                history.push('/Feedbackpage');
            })
            .catch(err => {
                alert('Error Adding ');
                console.log(err);
            })
    } 
    return(
        <div className="Review">
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feelings}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <button onClick={prettySure}>Submit</button>
        </div>
    )
}
export default Review;