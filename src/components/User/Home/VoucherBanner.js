import { Link } from "react-router-dom";


const VoucherBanner = () => {
    return (
        <div>
            <h3 className="text-center mt-3" id="title">Get your voucher now</h3>
            <div className="voucher container mt-2 mb-5">
                <img src="/voucher.jpg" className="img-fluid rounded" alt="Get voucher" />
                <Link className="overlay" to='/vouchers'>
                    <span className="overlay-text">View details</span>
                </Link>
            </div>
        </div>
    );
}

export default VoucherBanner;