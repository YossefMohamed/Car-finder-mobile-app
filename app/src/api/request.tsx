import axios, { AxiosError } from "axios";

const client = (() => {
  return axios.create({
    baseURL: "http://192.168.0.68:5000/api/",
  });
})();

const request = async function (options: any) {
  let data: any;
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
