import { Box, Stack, styled } from '@mui/material';

export const CatImageContainer = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  maxHeight: '375px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',

  [theme.breakpoints.down('md')]: {
    width: '150px',
    height: '150px',
  },
}));

export const CatImage = styled(Box)(({ theme }) => ({
  objectFit: 'cover',
  borderRadius: '4px',

  [theme.breakpoints.down('md')]: {
    width: '150px',
    height: '150px',
    clipPath: 'circle()',
  },
})) as typeof Box;

export const ContainerStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: '24px',
  border: '2px solid',
  borderColor: 'lightgray',
  borderRadius: '4px',
  backgroundColor: 'white',

  [theme.breakpoints.down('md')]: {
    padding: '8px',
  },
}));
