import { useEffect, useState } from 'react';

export const useCustomFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    //const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://shopmee-server-2.onrender.com" + url)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                //setError(null);
            })
            .catch(err => {
                // auto catches network / connection error
                setIsPending(false);
                //setError(err.message);
            })
    }, [url])


    return { data, isPending };
}

export const useFetchWithAuth = (url, method, token, body) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const fetchOption = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
    };

    if (body) {
        fetchOption.body = JSON.stringify(body);
    }


    useEffect(() => {
        fetch("https://shopmee-server-2.onrender.com" + url, fetchOption)
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(e => {
                e.json().then(err => {
                    setIsPending(false);
                    setError(err.error);
                })
            })
    }, [url, method, token])

    return { data, isPending, error, setData };
}

export const useAuthFetchAndPagination = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    const fetchWithAuthAndPagination = (url, method, token, body) => {
        const fetchOption = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };

        if (body) {
            fetchOption.body = JSON.stringify(body);
        }

        fetch("https://shopmee-server-2.onrender.com" + url, fetchOption)
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(e => {
                e.json().then(err => {
                    setIsPending(false);
                    setError(err.error);
                })
            })

    };


    return { fetchWithAuthAndPagination, data, isPending, error };
};

export const useAuthFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    const fetchOnClick = (url, method, token, body) => {
        const fetchOption = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };

        if (body) {
            fetchOption.body = JSON.stringify(body);
        }

        fetch("https://shopmee-server-2.onrender.com" + url, fetchOption)
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(e => {
                e.json().then(err => {
                    setIsPending(false);
                    setError(err.error);
                })
            })

    }

    return { data, isPending, error, fetchOnClick };
}