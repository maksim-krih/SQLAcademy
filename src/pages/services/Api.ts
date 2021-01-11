import axios from "axios"
import PassingApi from "./passing"

const backendUrl = "";

export const service = axios.create({
  baseURL: backendUrl
});

class Api {
  static get Passing() {
    return new PassingApi();
  }
}

export default Api;