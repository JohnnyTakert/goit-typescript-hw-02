import axios from 'axios';

const ACCESS_KEY = 'uDqvrbpNnZ7ehSF4xhNAeYEY7t2FN0ZKSO_VShvnnR8';
axios.defaults.baseURL = 'https://api.unsplash.com';

export const getImagesByQuery = async (query, page) => {
  const responce = await axios.get('/search/photos', {
    params: {
      client_id: ACCESS_KEY,
      query,
      page,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  return responce.data;
};

export const getDownloadLink = async link => {
  const responce = await axios.get(link, { params: { client_id: ACCESS_KEY } });
  return responce.data.url;
};
