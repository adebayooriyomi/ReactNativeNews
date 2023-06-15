import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(url)
            const json = await response.json()
            setData(json.articles)
            setLoading(false)
            setError(null)
        }catch(error){
            //console.error(error)
            setLoading(false)
            setError('Failed to load data ...')
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {data, loading, error}
}