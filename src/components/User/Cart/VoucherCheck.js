import { useEffect, useState } from "react";

const VoucherCheck = () => {

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

    return(
        <div>
            <input type="text" className="form-control" placeholder="Enter your voucher here..." onChange={checkVoucher} />
            {(valid !== 'Voucher not found' && valid !== 'Voucher expired') && <h4 className="mb-3 text-start" style={{color: 'green'}}>{valid}</h4>}
            {(valid === 'Voucher not found' || valid === 'Voucher expired') && <h4 className="mb-3 text-start" style={{color: 'red'}}>{valid}</h4>}
            {error && <h4 className="mb-3 text-start" style={{color: 'red'}}>{error}</h4>}
        </div>
    );
}

export default VoucherCheck;