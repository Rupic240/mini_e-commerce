import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    
    const navigate = useNavigate();
    
    return (
        <Card
            variant="outlined"
            sx={{ mb: 2, bgcolor: "transparent" }}>
            <CardContent>
                <CardActionArea
                    onClick={() => {
                        navigate(`/detail/${product.id}`, { state: { product } });
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 2,
                    }}>
                    <Box>
                        <Typography variant="h5">{product.name}</Typography>
                        <img
                            src={product.image}
                            alt="item-photo" style={{ width: 200, height: "auto", marginTop: 5, marginBottom: 5 }}
                        />
                        <Typography>Price - {product.price} $</Typography>
                        <Typography>Categoty - {product.category}</Typography>
                        <Typography>Description - {product.description}</Typography>
                    </Box>
                </CardActionArea>
            </CardContent>
        </Card>
    );
}

export default ProductCard;