import { useSearchParams } from "react-router-dom";

const SearchFilter = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    
    const applyFilter = () => {
        let params = { name: searchParams.get("name")};

        // Search for other params
        const min = document.getElementById('min').value;
        const max = document.getElementById('max').value;
        const category = document.getElementById('select').value;

        if(min){
            params.min = min;
        }
        if(max){
            params.max = max;
        }
        if(category){
            params.category = category;
        }

        //console.log(params);
        setSearchParams(params);
    }

    return (
        <div>
            <button className="btn btn-outline-secondary mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Show filter
            </button>
            <div className="collapse p-3 border" id="collapseExample">
                <label forhtml="price" className="form-label">Price range</label><br></br>

                <label className="form-label" style={{width: "50px"}}>From: </label>
                <input type="number" name="min" id="min" className="form-control w-25 d-inline" /><br></br>

                <label className="form-label" style={{width: "50px"}}>To: </label>
                <input type="number" name="max" id="max" className="form-control w-25 d-inline" /><br></br>


                <label forhtml="category" className="form-label m-1">Category</label>
                <select name="category" className="form-control" id="select">
                    <option value=""></option>
                    <option value="electronics">Electronics</option>
                    <option value="healthcares">Healthcares</option>
                    <option value="tools">Tools</option>
                    <option value="lifestyles">Lifestyles</option>
                    <option value="clothings">Clothings</option>
                    <option value="accessories">Accessories</option>
                    <option value="cosmetics">Cosmetics</option>
                    <option value="shoes">Shoes</option>
                </select>

                <button className="btn btn-outline-primary mt-3" onClick={applyFilter}>Apply filter</button>
            </div>
        </div>
    );
}

export default SearchFilter;