import { Box, Card, CardContent, Typography } from "@mui/material";
import cart from "../utils/cart.json"
const Cart = () => {

    const favItem = JSON.parse(localStorage.getItem('cart')) || cart;
    const validItems = favItem.filter(item => item.id && item.name && item.price);

    return (
        <Box>
            <Typography variant="h4">Cart</Typography>

            {
                validItems.length === 0 ? (
                    <Typography variant="h6">Your cart is empty.</Typography>
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