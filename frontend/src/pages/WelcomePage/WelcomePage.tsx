import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetNextDelivery } from '../../interfaces/GetNextDelivery';
import { getCatImage, getDeliveryInfoById } from '../../utils/api';
import { Container } from '@mui/material';
import { Wrapper } from './WelcomePage.styles';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo';

const WelcomePage: FC = () => {
  const { userId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<GetNextDelivery>();
  const [image, setImage] = useState<{ url: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const [data, randomImage] = await Promise.all([
        getDeliveryInfoById(userId),
        getCatImage(),
      ]);

      setData(data);
      setImage(randomImage);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth={'md'}>
        <Wrapper>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DeliveryInfo
              deliveryInfo={data!}
              image={image?.url || ''}
            ></DeliveryInfo>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default WelcomePage;
