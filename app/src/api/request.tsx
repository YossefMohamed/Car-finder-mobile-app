import axios, { AxiosError } from "axios";

const client = (() => {
  return axios.create({
    baseURL: "http://192.168.0.68:5000/api/",
  });
})();

const request = async function (options: any, token?: string) {
  let data: any;
  console.log(options, token);
  client.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
  const onSuccess = (response: any) => {
    data = response.data.data;
    return data;
  };

  const onError = (error: AxiosError) => {
    console.log(error.response!.data);
    return Promise.reject(error);
  };

  return client(options)
    .then(onSuccess)
    .catch((e: any) => {
      console.log("e");
      console.log("e");
      console.log(e);
      console.log(e);
      console.log(e);
      console.log("e");
      console.log("e");
    });
};

export default request;
