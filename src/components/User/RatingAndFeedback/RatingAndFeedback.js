import { useContext, useState } from 'react';
import './StarRating.css';
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const RatingAndFeedback = (props) => {

    const { user } = useContext(AuthContext);
    const { idInOrder, productId } = props
    const { id } = useParams();

    const [rating, setRating] = useState(1);
    const [feedback, setFeedback] = useState('');
    const [fbStatus, setFbStatus] = useState(false);

    const submitFeedback = (e) => {
        e.preventDefault();

        fetch('https://shopmee-server-2.onrender.com/feedback/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${user.token}`
            },
            body: JSON.stringify({
                rating: rating,
                feedback: feedback,
                idInOrder: idInOrder,
                productId: productId,
                orderId: id
            })
        })
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                // If everything went well, disable the button
                setFbStatus(true);
                toast.success(data);
            })
            .catch(e => {
                e.json().then(err => {
                    toast.error(err);
                })
            })
    }

    return (
        <form onSubmit={submitFeedback}>
            {!fbStatus && <p className="m-0">What do you think of this product?</p>}
            {!fbStatus && <div>
                <label className={(rating >= 1) ? "fa fa-star active clickable" : "fa fa-star clickable"} onClick={() => setRating(1)}></label>
                <label className={(rating >= 2) ? "fa fa-star active clickable" : "fa fa-star clickable"} onClick={() => setRating(2)}></label>
                <label className={(rating >= 3) ? "fa fa-star active clickable" : "fa fa-star clickable"} onClick={() => setRating(3)}></label>
                <label className={(rating >= 4) ? "fa fa-star active clickable" : "fa fa-star clickable"} onClick={() => setRating(4)}></label>
                <label className={(rating >= 5) ? "fa fa-star active clickable" : "fa fa-star clickable"} onClick={() => setRating(5)}></label>
            </div>}

            {fbStatus && <div>
                <label className={(rating >= 1) ? "fa fa-star active" : "fa fa-star"}></label>
                <label className={(rating >= 2) ? "fa fa-star active" : "fa fa-star"}></label>
                <label className={(rating >= 3) ? "fa fa-star active" : "fa fa-star"}></label>
                <label className={(rating >= 4) ? "fa fa-star active" : "fa fa-star"}></label>
                <label className={(rating >= 5) ? "fa fa-star active" : "fa fa-star"}></label>
            </div>}

            {!fbStatus && <input className="form-control mt-2" placeholder="Leave you opinion here" value={feedback} onChange={(e) => setFeedback(e.target.value)} required></input>}
            {fbStatus && <p>{feedback}</p>}

            {!fbStatus && <button className='btn btn-outline-primary mt-2'>Submit feedback</button>}
        </form>
    );
}

export default RatingAndFeedback;