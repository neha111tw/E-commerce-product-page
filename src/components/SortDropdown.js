import {
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    useMediaQuery,
    useTheme
  } from '@mui/material';
  
  const SortDropdown = ({ sortOption, onSortChange }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: isSmallScreen ? 1 : 2,
        flexDirection: isSmallScreen ? 'column' : 'row',
        mb: 3
      }}>
        <Typography 
          variant={isSmallScreen ? "subtitle1" : "h6"} 
          component="h3"
          sx={{ 
            fontWeight: 600,
            whiteSpace: 'nowrap'
          }}
        >
          Sort by:
        </Typography>
        
        <FormControl 
          size={isSmallScreen ? "small" : "medium"}
          sx={{ 
            minWidth: isSmallScreen ? '100%' : 200,
            '& .MuiInputBase-root': {
              borderRadius: 1,
              backgroundColor: theme.palette.background.paper
            }
          }}
        >
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="title-asc">Title: A to Z</MenuItem>
            <MenuItem value="title-desc">Title: Z to A</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  };
  
  export default SortDropdown;