import { Children, createContext, useState } from "react";

const CommonContext = createContext();

export const DataProvider = ({children}) => {

    const [a,setA] = useState("hi")

    return(
        <CommonContext.Provider value={{a,setA}}>
            {children}
        </CommonContext.Provider>
    )
}


export default CommonContext;