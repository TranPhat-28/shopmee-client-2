import { useEffect, useState } from 'react';

export const useFetchProducts = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    //const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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