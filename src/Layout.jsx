import { Outlet } from "react-router-dom";

import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";

import { Box, Container } from "@mui/material";
import { useUIState } from "./providers/UIStateProvider";

const Layout = () => {

    const { setSearchQuery } = useUIState();
    
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Box>
            <AppDrawer />
            <Header onSearch={handleSearch}/>
            <Container
                maxWidth="sm"
                sx={{ mt: 4 }}>
                <Outlet />
            </Container>
        </Box>
    );
}

export default Layout;