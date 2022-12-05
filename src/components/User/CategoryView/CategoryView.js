import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../../hooks/useFetchProducts";
import Card from "../Card";

const CategoryView = () => {

    const { category } = useParams()
    const { data, isLoading } = useFetchProducts('/category/' + category);

    return (
            <div className="container pb-5" style={{backgroundColor: "white"}}>
                <h3 className="mt-4">All products from: {category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="container d-flex flex-row p-0 flex-wrap">
                    { isLoading && <div>Loading...</div> }

                    { data && data.map(item => (
                        <Card product={item} key={item._id} styling='smaller-card' />
                    ))}
                    { data && data.map(item => (
                        <Card product={item} key={item._id} styling='smaller-card' />
                    ))}
                    { data && data.map(item => (
                        <Card product={item} key={item._id} styling='smaller-card' />
                    ))}
                    { data && data.map(item => (
                        <Card product={item} key={item._id} styling='smaller-card' />
                    ))}
                    
                    

                    { (data && data.length === 0) && (<div className="d-flex w-100 flex-column align-items-center">
                        <img id="notFound" className="img-fluid" src="/search.png" alt="Not Found"></img>
                        <h4>No product to display</h4>
                    </div>)}
                </div>
            </div>
        
    );
}

export default CategoryView;