import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";

const Report = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const submitReport = (e) => {
        e.preventDefault();

        fetch('/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${user.token}`
            },
            body: JSON.stringify({
                title,
                content
            })
        }).then(res => {
            if (!res.ok) { throw res }
            return res.json()
        })
        .then(data => {
            toast.success(data)
            navigate('/');
        })
        .catch(e => {
            e.json().then(err => {
                toast.error(err.error)
            })
        })
    }

    return (
        <div className="container h-100 pt-4 pb-4">
            <form onSubmit={submitReport}>
                <h2 className="mb-4">Report to admin</h2>

                <label className="form-label m-1">A short title about your report</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value) } required />

                <label className="form-label m-1">A detailed description about your experience</label>
                <textarea type="text" className="form-control mb-4" rows="7" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>

                <input type="submit" className="btn btn-primary" value="Send" />
            </form>
        </div>
    );
}

export default Report;