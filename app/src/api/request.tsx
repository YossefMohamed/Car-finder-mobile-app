import axios, { AxiosError } from "axios";

const client = (() => {
  return axios.create({
    baseURL: "http://192.168.0.68:5000/api/",
  });
})();

const request = async function (options: any, token?: string) {
  let data: any;
  console.log(options, token);
  client.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
  const onSuccess = (response: any) => {
    data = response.data.data;
    return data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response!.data);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
