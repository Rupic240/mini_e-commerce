import {
    Alert,
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import users from "../utils/users";

const Register = () =>{

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    console.log(localStorage.getItem('users'));
    

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4">Register</Typography>
            <Box sx={{ mt: 4 }}>
                <form onSubmit={e => {
                    e.preventDefault();
                    const name = nameRef.current.value;
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;

                    if (!name || !email || !password) {
                        setHasError(true);
                        setErrorMessage("All fields are required!");
                        return false;
                    }
                    
                    const existingUser = users.find(user => user.email === email);

                    if (existingUser) {
                        setHasError(true);
                        setErrorMessage("Email already exists!");
                        return false;
                    }

                    const newUser = users.push({
                        id: users.length + 1,
                        name,
                        email,
                        password,
                        role: "customer"
                    });

                    const newUsersList = [ ...users, newUser ];
                    localStorage.setItem("users", JSON.stringify(newUsersList));

                    setHasError(false);
                    setErrorMessage('');
                    navigate("/login");
                    
                }}>
                    {
                        hasError && (
                            <Alert
                                severity="warning"
                                sx={{ my: 4 }}
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
                        label="Email"
                        fullWidth
                        sx={{ mb: 2 }}
                        inputRef={emailRef}
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
                        Register
                    </Button>
                </form>

                <Box sx={{ mt: 2, textAlign: "center" }}>
                    <Link to="/login">Login</Link>
                </Box>


            </Box>
        </Box>
    )
}

export default Register;