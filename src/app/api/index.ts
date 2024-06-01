import axios, { AxiosInstance, AxiosError } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // let tokenType = 'Bearer';
    // let accessToken;
    // let refreshToken;

    // tokenType = await localStorage.getItem('tokenType');
    // accessToken = window.appToken;
    // refreshToken = await localStorage.getItem('refreshToken');

    // if (accessToken) {
    //   config.headers.Authorization = `${tokenType} ${accessToken}`;
    // }

    return config;
  },
  (error) => {
    console.log("error throw");
    throw false;
  }
);

export default axiosInstance;
