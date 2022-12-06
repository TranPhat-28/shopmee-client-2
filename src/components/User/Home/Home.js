import { useFetchProducts } from "../../../hooks/useFetchProducts";
import Carousel from "./Carousel";
import Category from "./Category";
import ProductListing from "../ProductListing";
import VoucherBanner from "./VoucherBanner";
import FooterInfo from "./FooterInfo";


const Home = () => {
    const { isPending: isPendingA, data: newArrivals } = useFetchProducts('/newArrivals');
    const { isPending: isPendingB, data: bestSellers } = useFetchProducts('/bestSellers');

    return(
        <div className="container" style={{backgroundColor: "white"}}>
            <Carousel />
            <Category />

            <h3 className="text-center mt-3" id="title">New arrivals</h3>
            { isPendingA && <div>Loading...</div>}
            { newArrivals && <ProductListing productList={newArrivals} />}

            <h3 className="text-center mt-3" id="title">Best sellers</h3>
            { isPendingB && <div>Loading...</div>}
            { bestSellers && <ProductListing productList={bestSellers} />}

            <VoucherBanner />
        </div>
    );
}

export default Home;