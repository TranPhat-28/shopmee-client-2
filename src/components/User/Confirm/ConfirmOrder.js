import { NumericFormat } from "react-number-format";
import { useLocation, useNavigate } from "react-router-dom";
import ItemDetailedList from "../Cart/ItemDetailedList";
import ConfirmButton from "./ConfirmButton";

const ConfirmOrder = () => {

    const location = useLocation();

    const total = location.state.total;
    const discount = location.state.discount;
    const cartDetail = location.state.cartDetail;
    let final = total;
    let discountAmount = 0;

    const navigate = useNavigate();

    if (typeof discount === 'number'){
        discountAmount = total / 100 * discount;
        final = total - discountAmount;
    }

    if (!cartDetail){
        navigate('/');
    }

    return (
        <div className="p-4" style={{ backgroundColor: 'white' }}>
            <h3>Confirm your order</h3>

            <ItemDetailedList detailedList={cartDetail} />
            <br></br>

            <h5>Total: 
                <NumericFormat displayType="text" value={total} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
            </h5>

            <h5>Discount: 
                <NumericFormat displayType="text" value={discountAmount} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
            </h5>
            
            <h5>Final: 
                <NumericFormat displayType="text" value={final} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
            </h5>

            <ConfirmButton cartDetail={cartDetail} total={total} discount={discount} discountAmount={discountAmount} voucher={location.state.voucher} final={final} />
        </div>
    );
}

export default ConfirmOrder;