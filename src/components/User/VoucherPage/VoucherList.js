import { useCustomFetch } from "../../../hooks/useFetch";

const VoucherList = () => {

    const { data, isPending, error } = useCustomFetch('/vouchers')


    return (
        <div className="container h-100 pt-4 pb-4" style={{ backgroundColor: "white" }}>

            <h3 style={{ fontWeight: "bold" }}>UNLIMITED TIME VOUCHER</h3>
            <div className="row px-2">
                {isPending && <p>Loading...</p>}
                {error && <p>Error fetching data</p>}

                <div className="col-sm-6 d-flex justify-content-center" id="banner1">
                    <img src="discount1.jpg" className="img-fluid" alt="Discount" id="discount1" />
                </div>

                {data && (<div className="col-sm-6 p-3">
                    {data.nonExpires.map(item => (
                        <div style={{marginBottom: '2rem'}}>
                            <h4>Voucher: <span style={{ fontWeight: "bold" }}>{item.voucherCode}</span></h4>
                            <details>
                                <summary style={{ fontWeight: "bold" }}>{item.summary}</summary>
                                {item.description}
                            </details>
                        </div>
                    ))}
                </div>)}
            </div>
            <br></br><br></br>


            <h3 style={{ fontWeight: "bold" }}>LIMITED TIME VOUCHER</h3>
            <div className="row px-2">
                {isPending && <p>Loading...</p>}
                {error && <p>Error fetching data</p>}

                <div className="col-sm-6 d-flex justify-content-center" id="banner2">
                    <img src="discount2.jpg" className="img-fluid" alt="Discount" id="discount2" />
                </div>
                {data && (<div className="col-sm-6 p-3">
                    {data.expires.map(item => (
                        <div style={{marginBottom: '2rem'}}>
                            <h4>Voucher: <span style={{ fontWeight: "bold" }}>{item.voucherCode}</span></h4>
                            <details>
                                <summary style={{ fontWeight: "bold" }}>{item.summary}</summary>
                                {item.description}
                            </details>
                        </div>
                    ))}
                </div>)}
            </div>
        </div>
    );
}

export default VoucherList;

/* 
<h4>Voucher: <span style={{ fontWeight: "bold" }}>VOUCHER CODE</span></h4>

                        <details>
                            <summary style={{ fontWeight: "bold" }}>Summary</summary>
                            Description
                        </details>
*/