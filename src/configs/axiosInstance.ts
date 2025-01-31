"use client";

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/endpoints";

interface AxiosInterceptorProps {
  children: React.ReactNode;
}
const httpPublic = axios.create({
  baseURL: baseUrl,
});

const http = axios.create({
  baseURL: "https://api.digikala.com/",
});

function AxiosInterceptor({ children }: AxiosInterceptorProps) {
  const navigate = useNavigate();
  useEffect(() => {
    async function reqInterceptFn(config: any) {
      return config;
    }

    function resOkInterceptFn(response: { status: number }):
      | {
          status: number;
        }
      | Promise<never>
      | any {
      if (response.status === 200) {
        return response;
      } else {
        // if (messages) {
        //   if (messages) {
        //     return Promise.reject({ messages });
        //   }
        //   return Promise.reject({ messages: [messages] });
        // }
        return Promise.reject({ messages: ["got errors"] });
      }
    }

    function resErrInterceptFn(error: { response: { status: any } }) {
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
