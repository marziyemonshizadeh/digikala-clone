import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/endpoints";

const httpPublic = axios.create({
  baseURL: baseUrl,
});

const http = axios.create({
  baseURL: baseUrl,
});

function AxiosInterceptor({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    async function reqInterceptFn(config) {
      return config;
    }

    function resOkInterceptFn(response) {
      if (response.status === 200) {
        return response;
      } else {
        if (messages) {
          if (messages instanceof Array) {
            return Promise.reject({ messages });
          }
          return Promise.reject({ messages: [messages] });
        }
        return Promise.reject({ messages: ["got errors"] });
      }
    }

    function resErrInterceptFn(error) {
      const status = error.response ? error.response.status : null;

      if (status === 401) {
      } else if (status === 404) {
      } else {
      }

      return Promise.reject(error);
    }

    const reqInterceptor = http.interceptors.request.use(reqInterceptFn);
    const resInterceptor = http.interceptors.response.use(
      resOkInterceptFn,
      resErrInterceptFn
    );

    return () => {
      http.interceptors.request.eject(reqInterceptor);
      http.interceptors.response.eject(resInterceptor);
    };
  }, [navigate]);

  return children;
}

export { AxiosInterceptor, http, httpPublic };
