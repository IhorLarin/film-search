import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        setError(null);

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Network error! status: ${response.status}`);
                return response.json();
            })
            .then(data => setData(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));

    }, [url]);

    return { data, loading, error }
}
