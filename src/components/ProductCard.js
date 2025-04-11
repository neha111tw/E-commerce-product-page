import { useCart } from '../context/CartContext';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: theme.shadows[6]
      }
    }}>
      <Box sx={{ 
        position: 'relative', 
        height: isSmallScreen ? 160 : 200,
        p: 2,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 1
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Tooltip title={product.title} placement="top" arrow>
          <Typography 
            gutterBottom 
            variant={isSmallScreen ? "subtitle1" : "h6"} 
            component="h3"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '3em',
              lineHeight: 1.4
            }}
          >
            {product.title}
          </Typography>
        </Tooltip>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            ${product.price.toFixed(2)}
          </Typography>
          <Chip 
            label={product.category} 
            size="small" 
            sx={{ 
              textTransform: 'capitalize',
              backgroundColor: theme.palette.grey[200],
              maxWidth: '100px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }} 
          />
        </Box>

        <Tooltip title={product.description} placement="top" arrow>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '2.8em',
              lineHeight: 1.4,
              mb: 1
            }}
          >
            {product.description}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => addToCart(product)}
          size={isSmallScreen ? "small" : "medium"}
          sx={{
            py: 1,
            borderRadius: 1
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;