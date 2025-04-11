import useCategories from '../hooks/useCategories';
import { 
  Select,
  MenuItem,
  FormControl,
  Typography,
  Box
} from '@mui/material';

const FilterSection = ({ selectedCategory, onCategoryChange }) => {
  const { categories, loading, error } = useCategories();

  if (error) return <div>Error loading categories</div>;

  return (
    <Box className="filter-section" sx={{ 
      width: '100%',
      maxWidth: 300,
      textAlign: 'left',
      mr: 'auto', 
      px: 1
    }}>
      <Typography 
        variant="body1" 
        component="h3" 
        sx={{ 
          fontSize: { xs: '1em', sm: '1.17em' },
          my: 1,
          fontWeight: 'bold',
          textAlign: 'left' 
        }}
      >
        Filter by Category
      </Typography>
      
      <FormControl fullWidth sx={{ textAlign: 'left' }}>
        {loading ? (
          <Select
            disabled
            value=""
            displayEmpty
            sx={{
              '& .MuiSelect-select': {
                py: 1,
                px: 2,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                textAlign: 'left' 
              }
            }}
          >
            <MenuItem value="" sx={{ justifyContent: 'flex-start' }}>
              Loading categories...
            </MenuItem>
          </Select>
        ) : (
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-select"
            sx={{
              '& .MuiSelect-select': {
                py: 1,
                px: 2,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                textAlign: 'left' 
              }
            }}
          >
            <MenuItem value="all" sx={{ justifyContent: 'flex-start' }}>
              All Categories
            </MenuItem>
            {categories.map(category => (
              <MenuItem 
                key={category} 
                value={category}
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  justifyContent: 'flex-start' 
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </Box>
  );
};

export default FilterSection;