import { useParams } from "react-router-dom";
import { useCustomFetchWithPage } from "../../../hooks/useCustomFetch";
import "../RatingAndFeedback/StarRating.css";

const ViewFeedback = () => {

    // Get the id of the product
    const { id } = useParams()

    const { page, data, prevPage, nextPage } = useCustomFetchWithPage('/feedback/' + id);

    return (
        <div className="container mt-3 mt-md-5">
            <h4>Feedbacks</h4>
            <ul className="list-group" id="feedbackList">
                {(data && data.length === 0) && <li className="list-group-item">No feedback</li>}
                {(data && data.length !== 0) && (
                    <div>
                        {data.map(item => (
                            <li className="list-group-item" key={item._id}>
                                <div>
                                    <label className={(item.star >= 1) ? "fa fa-star active" : "fa fa-star"}></label>
                                    <label className={(item.star >= 2) ? "fa fa-star active" : "fa fa-star"}></label>
                                    <label className={(item.star >= 3) ? "fa fa-star active" : "fa fa-star"}></label>
                                    <label className={(item.star >= 4) ? "fa fa-star active" : "fa fa-star"}></label>
                                    <label className={(item.star >= 5) ? "fa fa-star active" : "fa fa-star"}></label>
                                </div>
                                {item.date} from: {item.user}
                                <br />
                                {item.feedback}
                            </li>
                        ))}
                    </div>
                )}
            </ul>


            <div className="container d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-primary m-3" onClick={prevPage}>Prev</button>
                <span>{page}</span>
                <button className="btn btn-outline-primary m-3" onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default ViewFeedback;