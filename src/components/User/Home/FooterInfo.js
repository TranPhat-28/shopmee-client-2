import { Link } from "react-router-dom";

const FooterInfo = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 mb-md-2 mt-md-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" target="blank" href="https://www.facebook.com/phattran01/" role="button"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" target="blank" href="mailto: abc@example.com" role="button"><i className="far fa-envelope"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" target="blank" href="https://www.linkedin.com/in/phat-tran-nhu-390340196/" role="button"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" target="blank" href="https://www.github.com/TranPhat-28" role="button"><i className="fab fa-github"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" target="blank" href="https://tranphat-28.github.io" role="button"><i className="fas fa-globe"></i></a>
                </section>


                <section className="">
                    <ul className="container nav navbar-dark bg-dark justify-content-center border-bottom pb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Option</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Option</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Option</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Option</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Option</a></li>
                    </ul>
                </section>
            </div>



            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                Developed by TranPhat-28
            </div>
        </footer>
    );
}

export default FooterInfo;