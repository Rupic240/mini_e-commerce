import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

import { useUIState } from "../providers/UIStateProvider";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = ({ onSearch }) => {
  const { setOpenDrawer } = useUIState();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          Store
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {
            auth && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => {
                  navigate('/cart')
                }}>
                <ShoppingCartIcon />
              </IconButton>
            )
          }

          <IconButton
            edge="end"
            color="inherit"
            onClick={() => {
              setOpenDrawer(true);
            }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;