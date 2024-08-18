import { axios, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    withCredentials: true,
    "Access-Control-Allow-Origin": "*",
    // Rest api default setting sf ro api request
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((req: AxiosRequestConfig) => {
  // const token = loadStorage("ACCESS_TOKEN"); // get token
  // if (token) req.headers["Authorization"] = `Bearer ${token}`;
  // return req;
});

axiosClient.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosResponse) => {
    // try {

    if (err?.code == "ERR_NETWORK") {
      console.log("Network Error! Try again.");
    } else if (err?.response && err.response.status === 401) {
      console.log("Removing user**");
    } else {
      console.error(err?.message);
    }

    throw err;
  }
);

export default axiosClient;
