import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import cart from "../utils/cart";

const Details = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};

    const addToCart = () => {
        const favItem = cart.push({
            id: cart.length + 1,
            name: product.name,
            price: product.price,
            image: product.image
        })
        
        const favItemsList = [ ...cart, favItem ];
        localStorage.setItem("cart", JSON.stringify(favItemsList));

        navigate('/cart')
    }

    return (

        <Box sx={{ display: 'grid', gap: 2 }}>
            <img
                src={product.image}
                alt="item-photo" style={{ width: 250, height: "auto", marginTop: 5, marginBottom: 5 }}
            />
            <Typography variant="h4">{product.name}</Typography>
            <Typography>Price - {product.price} $</Typography>
            <Typography>Categoty - {product.category}</Typography>
            <Typography>Description - {product.description}</Typography>

            <Button
                variant="outlined"
                sx={{ width: 150 }}
                onClick={addToCart}
            >
                Add to Cart
            </Button>
        </Box>
    )
}

export default Details