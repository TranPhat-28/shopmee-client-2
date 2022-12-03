import { useFetchProducts } from "../hooks/useFetchProducts";
import Carousel from "./Home/Carousel";
import Category from "./Home/Category";
import ProductListing from "./ProductListing";

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
        </div>
    );
}

export default Home;