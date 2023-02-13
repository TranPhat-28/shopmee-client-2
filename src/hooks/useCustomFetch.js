import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


//// CUSTOM FETCH WITH AUTH AND PAGING
//// USED WHEN FETCHING A LIST OF PRODUCTS BY PAGE
export const useCustomFetchWithPage = (url, token) => {
    // State
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [isPending, setPending] = useState(null);
    const [error, setError] = useState(null);

    // Function
    const prevPage = () => {
        // Check
        if (page >= 1) {
            setPage(page - 1);
        }
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    // Load first page
    useEffect(() => {
        // Set pending
        setPending(true);
        //console.log(`Fetch to ${url} with page number ${page}`);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                pagenumber: page
            })
        })
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                // Set data
                setData(data);
                // Set pending
                setPending(false);
            })
            .catch(e => {
                e.json().then(err => {
                    //console.log(err)
                    setError(err);
                    setPending(false);
                })
            })
    }, [page])

    // Remember to page + 1 when displaying to the users
    return { page, data, error, isPending, prevPage, nextPage };
}



//// HELPER FUNCTION FETCH ONCLICK
//// ONETIME USE, WITH TOAST
export const useOneTimeFetchHelper = (url, method, token, body, navigateUrl) => {

    const navigate = useNavigate();

    const oneTimeFetch = () => {
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify(body)
        })
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                toast.success(data);
                if (navigateUrl){
                    navigate(navigateUrl);
                }
            })
            .catch(e => {
                e.json().then(err => {
                    toast.error(err)
                })
            })
    }

    return { oneTimeFetch };
}