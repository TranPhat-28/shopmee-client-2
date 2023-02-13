import { useEffect, useState } from "react"

export const useCustomFetchWithPage = (url, token) => {
    // State
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);

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
                setData(data);
                //console.log(data);
                data.forEach(element => {
                    console.log(element.feedback)
                });
            })
            .catch(e => {
                e.json().then(err => {
                    console.log(err)
                })
            })
    }, [page])

    return { page, data, prevPage, nextPage };
}