import { useSearchParams } from "react-router-dom";
import { useCustomFetchWithPage } from "../../../hooks/useCustomFetch";
import Card from "../Card";
import SearchFilter from "./SearchFilter";

const Search = () => {

    // Use this to handle url query param
    const [searchParams] = useSearchParams();
    // Name of the product to search
    const name = searchParams.get("name");

    // Get the URL for making fetch
    const customUrl = '/search?' + window.location.href.split('?')[1];

    // Fetch result
    const { page, data, error, isPending: isLoading, prevPage, nextPage } = useCustomFetchWithPage(customUrl);

    return (
        <div className="container pb-5" style={{ backgroundColor: "white" }}>
            {name && <h3 className="mt-4">Search result for "{name}"</h3>}
            {name && <SearchFilter nextPage={nextPage}/>}
            {name && <div className="container d-flex flex-row p-0 flex-wrap">
                {isLoading && <div>Loading...</div>}
                {data && data.map(item => (
                    <Card product={item} key={item._id} styling='smaller-card' />
                ))}
                {(data && data.length === 0) && (
                    <div className="d-flex w-100 flex-column align-items-center justify-content-center" style={{ height: "400px" }}>
                        <img id="notFound" className="img-fluid" src="/search.png" alt="Not Found"></img>
                        <h3 className="mt-2">No product found</h3>
                    </div>
                )}
            </div>}

            {!name && (
                <div className="d-flex w-100 flex-column align-items-center justify-content-center" style={{ height: "400px" }}>
                    <img id="notFound" className="img-fluid" src="/search.png" alt="Not Found"></img>
                    <h3 className="mt-2">No product found</h3>
                </div>
            )}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-outline-primary me-2" onClick={prevPage}>Prev</button>
                <button className="btn btn-outline-primary" onClick={nextPage}>Next</button>
            </div>}
        </div>
    );
}

export default Search;