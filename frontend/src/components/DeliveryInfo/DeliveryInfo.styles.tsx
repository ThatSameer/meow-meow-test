import { Box, styled } from '@mui/material';

export const CatImageContainer = styled(Box)(({ theme }) => ({
  width: '500px',
  height: '400px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    width: '260px',
  },
}));

export const CatImage = styled(Box)(() => ({
  minWidth: '100%',
  maxWidth: '100%',
  objectFit: 'cover',
})) as typeof Box;
