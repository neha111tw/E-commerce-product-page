import { 
    Box, 
    Button, 
    ButtonGroup,
    IconButton,
    useMediaQuery,
    useTheme
  } from '@mui/material';
  import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
    MoreHoriz
  } from '@mui/icons-material';
  
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    const getVisiblePages = () => {
      if (isSmallScreen) {
        if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
        
        if (currentPage === 1) return [1, 2, 3];
        if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
        
        return [currentPage - 1, currentPage, currentPage + 1];
      }
      
      if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
      
      if (currentPage <= 3) return [1, 2, 3, 4, 5, '...', totalPages];
      if (currentPage >= totalPages - 2) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };
  
    const visiblePages = getVisiblePages();
  
    return (
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 4,
        gap: 1
      }}>
        <IconButton
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label="previous page"
          size={isSmallScreen ? 'small' : 'medium'}
        >
          <KeyboardArrowLeft />
        </IconButton>
  
        <ButtonGroup variant="outlined" size={isSmallScreen ? 'small' : 'medium'}>
          {visiblePages.map((number, index) => (
            typeof number === 'number' ? (
              <Button
                key={number}
                onClick={() => onPageChange(number)}
                variant={currentPage === number ? 'contained' : 'outlined'}
                sx={{
                  minWidth: '32px',
                  px: isSmallScreen ? 1 : 1.5
                }}
              >
                {number}
              </Button>
            ) : (
              <Button 
                key={`ellipsis-${index}`} 
                disabled
                sx={{ minWidth: '32px' }}
              >
                <MoreHoriz />
              </Button>
            )
          ))}
        </ButtonGroup>
  
        <IconButton
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          aria-label="next page"
          size={isSmallScreen ? 'small' : 'medium'}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    );
  };
  
  export default Pagination;