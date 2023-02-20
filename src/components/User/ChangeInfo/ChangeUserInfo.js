import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";
import { useFetchWithAuth } from "../../../hooks/useFetch";

const UserInfo = () => {

    const { user } = useContext(AuthContext);
    const { data, isPending, error } = useFetchWithAuth('/user/' + user, 'GET', user.token)

    const HandleUpdate = (e) => {
        e.preventDefault();

        if (window.confirm("Update your contact information?")) {

            let phonenumber = document.querySelector("input[name='phonenumber']").value;
            let address = document.querySelector("input[name='address']").value;

            if ((phonenumber != data.phonenumber) || (address != data.address)) {
                // Changed information, send update
                const fetchOption = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${user.token}`
                    },
                    body: JSON.stringify({
                        newPhonenumber: phonenumber,
                        newAddress: address
                    })
                };

                fetch('https://shopmee-server-2.onrender.com/user', fetchOption)
                    .then(res => {
                        if (!res.ok) { throw res }
                        return res.json()
                    })
                    .then(data => {
                        toast.success(data)
                    })
                    .catch(e => {
                        e.json().then(err => {
                            toast.error(err)
                        })
                    })
            }
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="jumbotron p-3">
                {isPending && <p>Loading...</p>}
                {error && <p>Error loading your information</p>}

                {data && (<form className="d-flex flex-column" onSubmit={HandleUpdate}>
                    <h2 className="mb-4">Change your contact information</h2>

                    <label htmlFor="email" className="form-label m-1">Email</label>
                    <input type="email" name="email" className="form-control mb-3" value={user.email} disabled />

                    <label htmlFor="phonenumber" className="form-label m-1">Phone number</label>
                    <input type="number" name="phonenumber" className="form-control mb-3"
                        defaultValue={data.phonenumber} required />

                    <label htmlFor="address" className="form-label m-1">Address</label>
                    <input type="text" name="address" className="form-control mb-3"
                        defaultValue={data.address} required />

                    <button className="btn btn-primary mb-3">Update information</button>
                </form>)}
            </div>
        </div>
    );
}

export default UserInfo;