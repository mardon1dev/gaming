import React, {createContext, useEffect, useState} from 'react'

const GamingContext = createContext()

export const GamingProvider = ({children})=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const API_KEY = "d58a574ceac34f21a27e08f5e24795f5"

    const handleData = ()=>{
        setLoading(true)
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        .then(res=>res.json())
        .then(item=>{
            setData(item.results)
        })
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
    }

    useEffect(()=>{
        handleData()},[])


    return (
        <GamingContext.Provider value={{data}}>
            {children}
        </GamingContext.Provider>
    )
}

export default GamingContext;