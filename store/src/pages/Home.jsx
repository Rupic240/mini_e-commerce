import { Box, Typography } from "@mui/material";
import products from "../utils/products"
import ProductCard from "../components/ProductCard";
import { useUIState } from "../providers/UIStateProvider";

const Home = () => {

    const { searchQuery } = useUIState();

    const searchProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box>
            {searchProducts.length === 0 ? (
                <Typography variant="h5" sx={{ textAlign: 'center' }}>No products found</Typography>
            ) : (
                searchProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </Box>
    );
}

export default Home;