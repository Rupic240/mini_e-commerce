import {
    Alert,
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import users from "../utils/users";

const EditProfile = () => {

    const { setAuth, setAuthUser, authUser } = useAuth();
    const location = useLocation();
    const currUser = location.state?.authUser || authUser;

    const [name, setName] = useState(currUser.name);
    const [email, setEmail] = useState(currUser.email);
    const [password, setPassword] = useState(currUser.password);

    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const deleteUser = () => {
        users.filter(user => user.id !== currUser.id);
        localStorage.removeItem('currentUser');
        setAuth(false);
        navigate("/login");
    }

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4">Edit Profile</Typography>
            <Box sx={{ mt: 4 }}>
                <form onSubmit={e => {
                    e.preventDefault();

                    if (!name || !email || !password) {
                        setHasError(true);
                        setErrorMessage("All fields are required!");
                        return false;
                    }

                    const updatedUsers = users.map(user =>
                        user.id === currUser.id ? { ...user, name, email, password } : user
                    );


                    localStorage.setItem("users", JSON.stringify(updatedUsers));

                    const updatedUser = { ...currUser, name, email, password };
                    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

                    setAuthUser(updatedUser);

                    setHasError(false);
                    setErrorMessage('');
                    navigate("/");

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
                        defaultValue={name}
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        defaultValue={email}
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        defaultValue={password}
                        fullWidth
                        type="password"
                        sx={{ mb: 2 }}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Edit
                    </Button>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ background: "red", marginTop: 2 }}
                        onClick={deleteUser}
                    >
                        Delete
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default EditProfile;