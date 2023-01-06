import { useCustomFetch } from "../../../hooks/useFetch";

const VoucherList = () => {

    const {data, isPending} = useCustomFetch('/vouchers')


    return(
        <div className="container h-100 pt-4 pb-4" style={{backgroundColor: "white"}}>
            <h3 style={{fontWeight: "bold"}}>UNLIMITED TIME VOUCHER</h3>
            <div className="row px-2">
                <div className="col-sm-6 d-flex justify-content-center" id="banner1">
                    <img src="discount1.jpg" className="img-fluid" alt="Discount" id="discount1" />
                </div>
                <div className="col-sm-6 p-3">
                    <h4>Voucher: <span style={{fontWeight: "bold"}}>VOUCHER CODE</span></h4>
                    
                    <details>
                        <summary style={{fontWeight: "bold"}}>Summary</summary>
                        Description
                    </details>
                </div>
            </div>
            <br></br><br></br>


            <h3 style={{fontWeight: "bold"}}>LIMITED TIME VOUCHER</h3>
            <div className="row px-2">
                <div className="col-sm-6 d-flex justify-content-center" id="banner2">
                    <img src="discount2.jpg" className="img-fluid" alt="Discount" id="discount2" />
                </div>
                <div className="col-sm-6 p-3">
                    <h4>Voucher: <span style={{fontWeight: "bold"}}>VOUCHER CODE</span></h4>
                        
                    <details>
                        <summary style={{fontWeight: "bold"}}>Summary</summary>
                        Description
                    </details>
                    
                </div>
            </div>
        </div>
    );
}

export default VoucherList;