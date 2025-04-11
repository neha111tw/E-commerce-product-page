import { useCart } from '../context/CartContext';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  styled,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.text.primary,
}));

const Navbar = ({ onCartClick, onMenuClick }) => {
  const { cartCount } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton 
              edge="start" 
              color="inherit" 
              onClick={onMenuClick}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            FakeStore
          </Typography>
        </Box>

        <IconButton 
          color="inherit" 
          onClick={onCartClick}
          aria-label="cart"
          size="large"
        >
          <Badge 
            badgeContent={cartCount} 
            color="primary"
            overlap="circular"
            invisible={cartCount === 0}
          >
            <ShoppingCartIcon fontSize={isMobile ? "medium" : "large"} />
          </Badge>
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;