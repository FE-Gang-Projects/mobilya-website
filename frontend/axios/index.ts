import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    populate: '*',
  },
});

export default instance;
