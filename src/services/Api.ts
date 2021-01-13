import axios from "axios"
import { PassingApi } from "./passing"
import { AuthApi } from "./auth"

const backendUrl = "http://localhost:3000";

export const BaseApi = axios.create({
  baseURL: backendUrl,
  headers: {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
  }
});

class Api {
  static get Passing() {
    return new PassingApi();
  }

  static get Auth() {
    return new AuthApi();
  }
}

export default Api;