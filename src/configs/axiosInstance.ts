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
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Remote Address:": "185.188.106.11:443",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  },
});

//baseurl
const apiRequests = axios.create({
  baseURL: "https://api.digikala.com/",
  headers: {
    "Content-Type": "application/json",
    Auth: "Bearer Token",
    cookie:
      "tracker_glob_new=9hIZC1y; _ga=GA1.1.134570670.1734031027; ab_test_experiments=%5B%22229ea1a233356b114984cf9fa2ecd3ff%22%2C%22f0fd80107233fa604679779d7e121710%22%2C%22ff6e05e42fe897c23b7ed9bfa93e9373%22%2C%2237136fdc21e0b782211ccac8c2d7be63%22%5D; _hp2_id.1726062826=%7B%22userId%22%3A%22874069548856861%22%2C%22pageviewId%22%3A%223354544799525996%22%2C%22sessionId%22%3A%226700532577184762%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _hp5_event_props.2724891150=%7B%7D; _hp5_meta.2724891150=%7B%22userId%22%3A%223420749501067798%22%2C%22sessionId%22%3A%22191344575710329%22%2C%22lastEventTime%22%3A1735854637276%2C%22sessionProperties%22%3A%7B%22time%22%3A1735854637276%2C%22referrer%22%3A%22https%3A%2F%2Fwww.digikala.com%2Fincredible-offers%2F%22%2C%22id%22%3A%22191344575710329%22%2C%22search_keyword%22%3A%22%22%2C%22utm%22%3A%7B%22source%22%3A%22%22%2C%22medium%22%3A%22%22%2C%22term%22%3A%22%22%2C%22content%22%3A%22%22%2C%22campaign%22%3A%22%22%7D%2C%22initial_pageview_info%22%3A%7B%22time%22%3A1735854637276%2C%22id%22%3A%222019925213862041%22%2C%22title%22%3A%22%D8%B7%D9%84%D8%A7%DB%8C%20%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84%20%D8%AF%DB%8C%D8%AC%DB%8C%E2%80%8C%DA%A9%D8%A7%D9%84%D8%A7%20%7C%20%D8%AE%D9%88%D8%B4%20%D8%A2%D9%85%D8%AF%DB%8C%D8%AF%22%2C%22previous_page%22%3A%22%2Fincredible-offers%2F%22%2C%22url%22%3A%7B%22domain%22%3A%22www.digikala.com%22%2C%22path%22%3A%22%2Fgold%2Fwelcome%2F%22%2C%22query%22%3A%22%22%2C%22hash%22%3A%22%22%7D%2C%22source_properties%22%3A%7B%22screen_height%22%3A703%2C%22screen_width%22%3A1536%7D%7D%7D%7D; _clck=hn3gek%7C2%7Cfs8%7C0%7C1828; _hp2_id.11909122=%7B%22userId%22%3A%22537613439323816%22%2C%22pageviewId%22%3A%226218620242521097%22%2C%22sessionId%22%3A%228406851665689257%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _ga_4QNJWQBR4W=GS1.1.1736883484.4.0.1736883580.0.0.0; _sp_id.13cb=833c4f74-5d66-48dc-b034-2b7ec6578105.1734031025.17.1737131257.1737033571.239548ca-048a-4582-b8b4-f9aa01ee0b05.4423d100-8e96-410a-b4f8-7999b14b1265.563c886d-df68-4e1a-bccc-2b706ad2183c.1737131161237.5; _ga_QQKVTD5TG8=GS1.1.1737145729.24.0.1737145729.0.0.0; TS010e7d7f=0102310591b75e5584dd5fa24ba2b55b92b89e2b9a8e52eddb2b352a1224830bd759c4dcce69b0771ee150a3bc8601883a5fa9882913bec4947e0f9192f4febfada78de902; TS011434b1=0102310591b89ceb2fd7b80d123e37ef29eb6783f38e52eddb2b352a1224830bd759c4dccea505b7c81f969dfeb6a3b15db9d10030646dd562729ce7bd16bc14b2a2b5be74; TS01c77ebf=0102310591179cdc676f354ae2f911a2b5d533f36faa212a73cd6a51fa170df43e2d731cb36764102eb53ecc5d9fef2d454a469261",
 "Access-Control-Allow-Origin": "*",
    "Remote Address:": "185.188.106.11:443",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  
    },
});
// requests
apiRequests.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("Err", err);
    return Promise.reject(err);
  }
);
//responses
apiRequests.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const status = err.response.status;
    if (status === 403) {
      alert(err);
    } else if (status === 429) {
      alert(err);
      // Coding
    } else if (status === 404) {
      alert(err);
      // Coding
    } else if (status === 401) {
      alert(err);
      // Navigate to login page
    }

    return Promise.reject(err);
  }
);

export default apiRequests;

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

export { AxiosInterceptor, apiRequests, http, httpPublic };
