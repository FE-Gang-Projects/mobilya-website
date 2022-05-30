import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    populate: '*',
  },
});

// instance.interceptors.response.use(
//   (response) =>
//     response.data.data.map((item: any) => {
//       return { ...item.attributes, id: item.id };
//     }),
//   (error) => error
// );

export default instance;
