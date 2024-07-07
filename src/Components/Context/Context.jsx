import React, {createContext, useEffect, useState} from 'react'

const GamingContext = createContext()

export const GamingProvider = ({children})=>{

    

    return (
        <GamingContext.Provider value={{children}}/>
    )
}

export default GamingContext;