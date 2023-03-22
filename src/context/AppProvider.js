import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [user, setUser] = useState()
    return(
        <AppContext.Provider
        value = {{
            user,
            setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const AppState = ()=>{
    return useContext(AppContext)
}

export default AppProvider