import axios from "axios";
const baseurl = process.env.REACT_APP_SERVER_URL;

class HttpClientClass {
  baseClient: any;
  constructor(baseURL: string, headers?: any) {
    this.baseClient = axios.create({ baseURL, headers });
  }

  get(url: string) {
    return this.baseClient.get(url);
  }

  post(url: string, data: any) {
    return this.baseClient.post(url, data);
  }
}

let HttpClient: null | HttpClientClass;
const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
};

if (baseurl) {
  HttpClient = new HttpClientClass(baseurl, headers);
}

export { HttpClient };
