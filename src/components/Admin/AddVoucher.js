import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddVoucher = () => {

    const { adminUser } = useContext(AdminAuthContext);
    const navigate = useNavigate();

    const [code, setCode] = useState('');
    const [exp, setExp] = useState('');
    const [percent, setPercent] = useState('');
    const [sum, setSum] = useState('');
    const [desc, setDesc] = useState('');
    const [noexp, setNoExp] = useState(false);

    const toggleNoExp = () => {
        setNoExp(!noexp);
    }


    const addVoucher = (e) => {
        e.preventDefault();

        fetch('/admin/voucher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${adminUser.token}`
            },
            body: JSON.stringify({
                voucherCode: code,
                expirationDate: exp,
                noexp: noexp,
                discountPercent: percent,
                summary: sum,
                description: desc
            })
        })
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                //setData(data);
                //setIsPending(false);
                toast.success(data);
                navigate('/admin/allVouchers');
            })
            .catch(e => {
                e.json().then(err => {
                    //setIsPending(false);
                    //setError(err.error);
                    toast.error(err)
                })
            })
    }

    return (<div>
        <h4>Add a new voucher</h4>
        <form onSubmit={addVoucher}>
            <label className="form-label mb-0">Voucher code</label>
            <input type="text" name="voucherCode" className="form-control mb-2" value={code} onChange={(e) => setCode(e.target.value)} />

            <label className="form-label mb-0">Expiration date</label>
            <input type="date" name="expirationDate" className="form-control" value={exp} onChange={(e) => setExp(e.target.value)} />

            <input className="form-check-input mb-2 me-2" type="checkbox" id="noExpire" name="noExpire" onChange={toggleNoExp} />
            <label className="form-check-label">No expire</label>
            <br></br>

            <label className="form-label mb-0">Discount percentage</label>
            <input type="number" name="discountPercent" className="form-control mb-2" value={percent} onChange={(e) => setPercent(e.target.value)} />

            <label className="form-label mb-0">Voucher summary</label>
            <input type="text" name="summary" className="form-control mb-2" value={sum} onChange={(e) => setSum(e.target.value)} />

            <label className="form-label mb-0">Voucher description</label>
            <textarea className="form-control mb-2" rows="3" name="description" value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>

            <input type="submit" className="btn btn-primary" value="Add voucher to database" />
        </form>
    </div>);
}

export default AddVoucher;