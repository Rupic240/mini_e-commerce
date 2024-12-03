import { createContext, useContext, useState } from "react";

const UIStateContext = createContext();

export function useUIState() {
    return useContext(UIStateContext);
}

export default function UIStateProvider({ children }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <UIStateContext.Provider
            value={{
                openDrawer,
                setOpenDrawer,
                searchQuery,
                setSearchQuery,
            }}>
            {children}
        </UIStateContext.Provider>
    )
}
