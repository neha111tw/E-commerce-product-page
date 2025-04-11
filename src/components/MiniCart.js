import { useCart } from '../context/CartContext';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  TextField,
  Badge,
  useMediaQuery,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { Close, Remove, Add, DeleteOutline } from '@mui/icons-material';

const MiniCart = ({ isOpen, onClose }) => {
  const { 
    cartItems, 
    cartTotal, 
    cartCount,
    removeFromCart,
    updateQuantity
  } = useCart();

  const isMobile = useMediaQuery('(max-width:600px)');

  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: isMobile ? '100vw' : '420px',
            padding: isMobile ? '16px' : '24px'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}>
            <Typography variant="h6" component="h2">
              Your Cart <Badge badgeContent={cartCount} color="primary" sx={{ ml: 1 }} />
            </Typography>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>

          <Divider />

          <Box sx={{ flexGrow: 1, overflowY: 'auto', my: 2 }}>
            {cartItems.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
                Your cart is empty
              </Typography>
            ) : (
              <List>
                {cartItems.map(item => (
                  <ListItem 
                    key={item.id} 
                    sx={{ 
                      py: 2,
                      alignItems: 'flex-start'
                    }}
                    secondaryAction={
                      <IconButton 
                        edge="end" 
                        onClick={() => removeFromCart(item.id)}
                        sx={{ ml: 1 }}
                      >
                        <DeleteOutline color="error" />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={item.image}
                        alt={item.title}
                        variant="rounded"
                        sx={{ 
                          width: 80, 
                          height: 80,
                          mr: 2
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={
                        <>
                          <Typography variant="body2" color="text.primary">
                            ${item.price.toFixed(2)}
                          </Typography>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            mt: 1
                          }}>
                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Remove fontSize="small" />
                            </IconButton>
                            <TextField
                              value={item.quantity}
                              size="small"
                              sx={{ 
                                width: '50px',
                                mx: 1,
                                '& .MuiInputBase-input': {
                                  textAlign: 'center'
                                }
                              }}
                              inputProps={{ 
                                style: { padding: '6px' } 
                              }}
                            />
                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Add fontSize="small" />
                            </IconButton>
                          </Box>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>

          {cartItems.length > 0 && (
            <>
              <Divider />
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2
              }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${cartTotal.toFixed(2)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ 
                  py: 1.5,
                  mb: 2
                }}
              >
                Proceed to Checkout
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default MiniCart;