import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";
import { useFetchWithAuth } from "../../../hooks/useFetch";
import { useLogout } from "../../../hooks/useLogout";

const ChangePassword = () => {

    const { user } = useContext(AuthContext);
    const { data, isPending, error } = useFetchWithAuth('/user/' + user, 'GET', user.token)
    const {logout} = useLogout();
    const navigate = useNavigate();

    const HandleUpdate = (e) => {
        e.preventDefault();

        if (window.confirm("Change password?")) {
            let oldpassword = document.querySelector("input[name='oldpassword']").value;
            let newpassword = document.querySelector("input[name='newpassword']").value;
            let confirm = document.querySelector("input[name='confirm']").value;

            const fetchOption = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${user.token}`
                },
                body: JSON.stringify({
                    oldpassword: oldpassword,
                    newpassword: newpassword,
                    confirm: confirm
                })
            };


            fetch('https://shopmee-server-2.onrender.com/userPassword', fetchOption)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(data => {
                    toast.success(data + '. Please login again');
                    // If password successfully changed, logout and ask for login again
                    logout();
                    navigate('/login')
                })
                .catch(e => {
                    e.json().then(err => {
                        toast.error(err)
                    })
                })
        }
    }


    return (
        <div className="container d-flex justify-content-center">
            <div className="jumbotron p-3">
                {isPending && <p>Loading...</p>}
                {error && <p>Error loading your information</p>}

                {data && (<form className="d-flex flex-column" onSubmit={HandleUpdate}>
                    <h2 className="mb-4">Change your password</h2>

                    <label htmlFor="oldpassword" className="form-label m-1">Old password</label>
                    <input type="password" name="oldpassword" className="form-control mb-3" required/>

                    <label htmlFor="newpassword" className="form-label m-1">New password</label>
                    <input type="password" name="newpassword" className="form-control mb-3" required/>

                    <label htmlFor="confirm" className="form-label m-1">Confirm new password</label>
                    <input type="password" name="confirm" className="form-control mb-3" required/>

                    <button className="btn btn-primary mb-3">Change password</button>
                </form>)}
            </div>
        </div>
    );
}

export default ChangePassword;