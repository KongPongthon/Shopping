import axios, { AxiosInstance } from 'axios';

const baseUrlNoCredential: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
});

const baseUrl: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
  withCredentials: true, // send cookies with requests
});

const baseImageUrl: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
  withCredentials: true, // send cookies with requests
});

const baseUrlImageNoCredential: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
});

export { baseUrlNoCredential, baseUrl, baseImageUrl, baseUrlImageNoCredential };
