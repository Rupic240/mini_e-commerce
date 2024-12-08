import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import cart from "../utils/cart.json"
import { useEffect, useState } from "react";
const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    
    useEffect(() => {
        
        const storedItems = JSON.parse(localStorage.getItem('cart')) || cart;
        setCartItems(storedItems);
    }, []) 
    const removeItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    }

    const validItems = cartItems.filter(item => item.id && item.name && item.price);


    return (
        <Box>
            <Typography variant="h4">Cart</Typography>

            {
                validItems.length === 0 ? (
                    <Typography variant="h5" sx={{ textAlign: "center", mt: 2 }}>Your cart is empty.</Typography>
                ) : (
                    <>
                        {
                            validItems.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        variant="outlined"
                                        sx={{
                                            mb: 2,
                                            bgcolor: "transparent",
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: 2,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>

                                        <CardContent sx={{ textAlign: 'center' }}>
                                            <img
                                                src={item.image}
                                                alt="item-photo"
                                                style={{ width: 200, height: "auto", marginTop: 5, marginBottom: 5 }}
                                            />
                                            <Typography variant="h5">{item.name}</Typography>
                                            <Typography>Price - {item.price} $</Typography>
                                        </CardContent>
                                        <Button
                                            variant="outlined"
                                            sx={{ width: 150 }}
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </Button>
                                    </Card>
                                )
                            })
                        }
                    </>
                )
            }
        </Box>
    )
}

export default Cart;