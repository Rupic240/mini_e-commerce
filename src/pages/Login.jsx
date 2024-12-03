import {
    Alert,
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export default function Login() {

    const nameRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    const { setAuth, setAuthUser } = useAuth();

    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4">Login</Typography>
            <Box sx={{ mt: 4 }}>
                <form onSubmit={e => {
                    e.preventDefault();
                    const name = nameRef.current.value;
                    const password = passwordRef.current.value;

                    if (!name || !password) {
                        setHasError(true);
                        setErrorMessage('name and password required');
                        return false;
                    }

                    const users = JSON.parse(localStorage.getItem('users'));

                    const user = users.find(user => user.name === name);                    

                    if (!user || user.password!== password) {
                        setHasError(true);
                        setErrorMessage('Invalid name or password');
                        return false;
                    }

                    setAuth(true);
                    setAuthUser(user);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    navigate("/");

                }}>
                    {
                        hasError && (
                            <Alert
                                severity="warning"
                                sx={{ mb: 4 }}
                            >
                                {errorMessage}
                            </Alert>
                        )
                    }
                    <TextField
                        label="Name"
                        fullWidth
                        sx={{ mb: 2 }}
                        inputRef={nameRef}
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        type="password"
                        sx={{ mb: 2 }}
                        inputRef={passwordRef}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Login
                    </Button>
                </form>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Link to="/register" >Register</Link>
                </Box>

            </Box>
        </Box>
    )
}