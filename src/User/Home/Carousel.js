const Carousel = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="2000">
            <div className="carousel-inner">
            <div className="active carousel-item">
                <img src="/banner1.jpg" className="d-block w-100 img-fluid" alt="BannerA" />
            </div>
            <div className="carousel-item">
                <img src="/banner2.jpg" className="d-block w-100 img-fluid" alt="BannerB" />
            </div>
            <div className="carousel-item">
                <img src="/banner3.jpg" className="d-block w-100 img-fluid" alt="BannerC" />
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;