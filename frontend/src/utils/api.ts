import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getDeliveryInfoById = async (userId: string | undefined) => {
  const url = `${API_URL}/comms/your-next-delivery/${userId}`;
  const { data } = await axios.get(url);

  return data;
};

export const getCatImage = async () => {
  const url = 'https://api.thecatapi.com/v1/images/search';
  const { data } = await axios.get(url);
  return data[0];
};
