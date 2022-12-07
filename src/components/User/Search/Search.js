import { useSearchParams } from "react-router-dom";
import { useFetchProducts } from "../../../hooks/useFetchProducts";
import Card from "../Card";
import SearchFilter from "./SearchFilter";

const Search = () => {

    // Use this to handle url query param
    const [searchParams, setSearchParams] = useSearchParams();
    // Name of the product to search
    const name = searchParams.get("name");

    // Get the URL for making fetch
    const customUrl = '/search?' + window.location.href.split('?')[1];

    // Fetch result
    const { data, isLoading } = useFetchProducts(customUrl);

    return (
        <div className="container pb-5" style={{ backgroundColor: "white" }}>
            {name && <h3 className="mt-4">Search result for "{name}"</h3>}
            {name && <SearchFilter />}
            {name && <div className="container d-flex flex-row p-0 flex-wrap">
                {isLoading && <div>Loading...</div>}
                {data && data.map(item => (
                    <Card product={item} key={item._id} styling='smaller-card' />
                ))}
            </div>}

            {!name && (
                <div className="d-flex w-100 flex-column align-items-center justify-content-center" style={{ height: "400px" }}>
                    <img id="notFound" className="img-fluid" src="/search.png" alt="Not Found"></img>
                </div>
            )}
        </div>
    );
}

export default Search;