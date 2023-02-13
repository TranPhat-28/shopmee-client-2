import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { useOneTimeFetchHelper } from "../../hooks/useCustomFetch";

const VoucherDetail = (props) => {

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


    // Hepler fetch function
    const { oneTimeFetch } = useOneTimeFetchHelper('/admin/voucher', 'DELETE', adminUser.token, {
        _id,
        voucherCode
    }, '0');

    const deleteVoucher = (e) => {
        e.preventDefault();

        if (window.confirm('Do you really want to delete this voucher?')) {
            oneTimeFetch();
        }
    }


    return (
        <div className="mt-4">
            <h4>Voucher detail</h4>
            {!detailData && <p>Click on a voucher to view detail</p>}

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

                <button className="btn btn-outline-danger">Delete this voucher</button>
            </form>}
        </div>
    );
}

export default VoucherDetail;