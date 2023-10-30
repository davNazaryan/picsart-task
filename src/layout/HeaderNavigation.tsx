import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { routes } from './Router';

export const DesktopNavigation = ({ handleCloseNavMenu }: NavigationProps) => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {routes.map(({ title, path }) => (
      <Button
        component={Link}
        to={path}
        color="primary"
        key={title}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {title}
      </Button>
    ))}
  </Box>
);

export const MobileNavigation = ({
  handleCloseNavMenu,
  handleOpenNavMenu,
  anchorElNav,
}: MobileNavigationProps) => (
  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {routes.map(({ title, path }) => (
        <MenuItem
          component={Link}
          to={path}
          key={title}
          onClick={handleCloseNavMenu}
        >
          <Typography textAlign="center">{title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>
);

interface NavigationProps {
  handleCloseNavMenu: () => void;
}

interface MobileNavigationProps extends NavigationProps {
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
  anchorElNav: null | HTMLElement;
}
