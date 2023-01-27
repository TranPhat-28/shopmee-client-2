import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";

const VoucherDetail = (props) => {

    const navigate = useNavigate();
    const { adminUser } = useContext(AdminAuthContext);
    const detailData = props.detailData;
    const detailError = props.detailError;

    const [_id, setid] = useState('');
    const [voucherCode, setVoucherCode] = useState('');
    const [exp, setExp] = useState('');
    const [percent, setPercent] = useState('');
    const [sum, setSum] = useState('');
    const [desc, setDesc] = useState('');


    useEffect(() => {
        if (detailData) {
            setVoucherCode(detailData.voucherCode);
            setid(detailData._id);
            setExp(detailData.expirationDate);
            setPercent(detailData.discountPercent);
            setSum(detailData.summary);
            setDesc(detailData.description);
        }
    }, [detailData])


    const deleteVoucher = (e) => {
        e.preventDefault();

        if (window.confirm('Do you really want to delete this voucher?')) {
            fetch('/admin/voucher', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${adminUser.token}`
                },
                body: JSON.stringify({
                    _id,
                    voucherCode
                })
            })
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(data => {
                    toast.success(data);
                    navigate(0);
                })
                .catch(e => {
                    e.json().then(err => {
                        toast.error(err)
                    })
                })
        }
    }

    return (
        <div className="mt-4">
            <h4>Voucher detail</h4>
            {!detailData && <p>Click on a product to view detail</p>}

            {detailError && <p>{detailError}</p>}

            {detailData && <form onSubmit={deleteVoucher}>
                <label className="form-label mb-0">Voucher ID</label>
                <input className="form-control mb-2" type="text"
                    value={_id} disabled></input>

                <label className="form-label mb-0">Voucher code</label>
                <input className="form-control mb-2" type="text"
                    value={voucherCode} disabled></input>

                <label className="form-label mb-0">Expiration date</label>
                <input className="form-control mb-2" type="text"
                    value={exp} disabled></input>

                <label className="form-label mb-0">Discount percent</label>
                <input className="form-control mb-2" type="text"
                    value={percent} disabled></input>

                <label className="form-label mb-0">Summary</label>
                <input className="form-control mb-2" type="text"
                    value={sum} disabled></input>

                <label className="form-label mb-0">Description</label>
                <textarea rows="3" className="form-control mb-2" type="text"
                    value={desc} disabled></textarea>

                <button className="btn btn-outline-primary">Delete this voucher</button>
            </form>}
        </div>
    );
}

export default VoucherDetail;