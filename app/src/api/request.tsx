import axios, { AxiosError } from "axios";

const client = ({ options, token }: any) => {
  const createAxiosClient = axios.create({
    baseURL: "http://192.168.0.68:5000/api/",
  });

  createAxiosClient.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return createAxiosClient;
};

const request = async function (options: any) {
  let data: any;
  const onSuccess = (response: any) => {
    data = response.data.data;
    return data;
  };

  const onError = (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error.response!.data);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
