import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const VoucherCheck = (props) => {

    const navigate = useNavigate();
    const total = props.total;
    const cartDetail = props.cartDetail;

    const [voucher, setVoucher] = useState('');
    const [valid, setValid] = useState('No voucher entered');
    const [error, setError] = useState(null);

    const checkVoucher = (e) => {
        setVoucher(e.target.value);
    }

    useEffect(() => {
        fetch('/validateVoucher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                voucher: voucher
            })
        })
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                setValid(data);
                setError(null);
            })
            .catch(e => {
                setValid(null);
                setError(e.message);
            })
    }, [voucher])

    const goToConfirm = () => {
        navigate('/confirm', {
            state: {
                cartDetail: cartDetail,
                total: total,
                discount: valid
            }
        });
    }

    return (
        <div>
            <input type="text" className="form-control" placeholder="Enter your voucher here..." onChange={checkVoucher} />
            {(valid === 'No voucher entered') && <h4 className="mb-3 text-start" style={{ color: 'green' }}>No voucher entered</h4>}
            {(valid !== 'Voucher not found' && valid !== 'Voucher expired' && valid !== 'No voucher entered') && <h4 className="mb-3 text-start" style={{ color: 'green' }}>Discount {valid}%</h4>}
            {(valid === 'Voucher not found' || valid === 'Voucher expired') && <h4 className="mb-3 text-start" style={{ color: 'red' }}>{valid}</h4>}
            {error && <h4 className="mb-3 text-start" style={{ color: 'red' }}>{error}</h4>}

            <h2 className="fw-bold">Total:
                <NumericFormat displayType="text" value={total} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
            </h2>

            <button className="btn btn-primary" onClick={goToConfirm}>Checkout</button>
        </div>
    );
}

export default VoucherCheck;