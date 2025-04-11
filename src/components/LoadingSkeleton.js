import React from 'react';
import { Skeleton, Box, Grid } from '@mui/material';

const LoadingSkeleton = ({ count }) => {
  return (
    <Grid container spacing={3}>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Grid 
            item 
            key={index} 
            xs={12} 
            sm={6}  
            md={4}  
            lg={3} 
          >
            <Box 
              className="product-card skeleton"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Skeleton 
                variant="rectangular" 
                sx={{
                  height: { xs: 150, sm: 180, md: 200 }, 
                  mb: 1.5,
                  borderRadius: 1 
                }} 
              />
              <Box sx={{ p: 1.5, flexGrow: 1 }}>
                <Skeleton 
                  variant="text" 
                  width="80%" 
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }} 
                />
                <Skeleton 
                  variant="text" 
                  width="60%" 
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }} 
                />
                <Skeleton 
                  variant="text" 
                  width="70%" 
                  sx={{ 
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    mt: 1 
                  }} 
                />
              </Box>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default LoadingSkeleton;