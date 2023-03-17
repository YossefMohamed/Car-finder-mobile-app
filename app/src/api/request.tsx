import axios, { AxiosError } from "axios";

const client = axios.create({
  baseURL: "http://192.168.0.68:5000/api/",
});

const request = async function (
  options: any,
  token?: string,
  useRefreshToken?: (token: string) => Promise<void>,
  refreshToken?: string
) {
  let data: any;
  client.interceptors.request.use(
    (config) => {
      console.log(options, token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        try {
          const token: string = await new Promise((resolve) => {
            axios
              .post("http://192.168.0.68:5000/api/refresh", {
                refreshToken,
              })
              .then((response) => {
                resolve(response.data.token);
              });
          });
          if (useRefreshToken) {
            await useRefreshToken(token);
          }
          originalRequest.headers.Authorization = `Bearer ${token}`;
          originalRequest._retry = true;

          return client(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
  );
  const onSuccess = (response: any) => {
    data = response.data.data;
    return data;
  };

  const onError = (error: AxiosError) => {
    console.log(error.message);
    return Promise.reject(error.response!.data);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
