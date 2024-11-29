import { Box, Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { GetNextDelivery } from '../../interfaces/GetNextDelivery';
import {
  CatImage,
  CatImageContainer,
  ContainerStack,
} from './DeliveryInfo.styles';

interface DeliveryInfoProps {
  deliveryInfo: GetNextDelivery;
  image: string;
}

const DeliveryInfo: FC<DeliveryInfoProps> = ({ deliveryInfo, image }) => {
  return (
    <>
      <Box>
        <ContainerStack direction={{ md: 'row' }}>
          <CatImageContainer>
            <CatImage
              component="img"
              alt="your pretty feline"
              src={image}
            ></CatImage>
          </CatImageContainer>

          <Stack
            textAlign={{ md: 'left' }}
            alignItems={{ xs: 'center', md: 'start' }}
            paddingRight={{ md: 1 }}
            gap={'12px'}
          >
            <Typography variant="h6" fontWeight={'bold'} color="green">
              {deliveryInfo?.title}
            </Typography>
            <Typography variant="body1">{deliveryInfo?.message}</Typography>
            <Typography variant="body1" fontWeight={'bold'}>
              Total price: £{deliveryInfo?.totalPrice.toFixed(2)}
            </Typography>
            {deliveryInfo?.freeGift && (
              <Box bgcolor={'pink'} width={'max-content'}>
                FREE GIFT
              </Box>
            )}

            <Stack direction={'row'} gap={'12px'} paddingBottom={2}>
              <Button variant="contained" sx={{ backgroundColor: 'green' }}>
                SEE DETAILS
              </Button>
              <Button
                variant="outlined"
                sx={{ color: 'green', borderColor: 'green' }}
              >
                EDIT DELIVERY
              </Button>
            </Stack>
          </Stack>
        </ContainerStack>
      </Box>
    </>
  );
};

export default DeliveryInfo;
