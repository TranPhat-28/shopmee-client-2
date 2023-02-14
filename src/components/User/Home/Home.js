import Carousel from "./Carousel";
import Category from "./Category";
import ProductListing from "../ProductListing";
import VoucherBanner from "./VoucherBanner";
import { useHomeFetch } from "../../../hooks/useCustomFetch";


const Home = () => {
    const { isPending: isPendingA, data: newArrivals, error: errorA } = useHomeFetch('/newArrivals');
    const { isPending: isPendingB, data: bestSellers, error: errorB } = useHomeFetch('/bestSellers');

    return(
        <div className="container" style={{backgroundColor: "white"}}>
            <Carousel />
            <Category />

            <h3 className="text-center mt-3" id="title">New arrivals</h3>
            { isPendingA && <div>Loading...</div>}
            { errorA && <div>{errorA}</div>}
            { newArrivals && <ProductListing productList={newArrivals} />}

            <h3 className="text-center mt-3" id="title">Best sellers</h3>
            { isPendingB && <div>Loading...</div>}
            { errorB && <div>{errorB}</div>}
            { bestSellers && <ProductListing productList={bestSellers} />}

            <VoucherBanner />
        </div>
    );
}

export default Home;