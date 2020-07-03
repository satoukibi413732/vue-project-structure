import { get, post } from "./http";

export default {
  query: params => {
    return get("http://localhost:8081//goods/goodAll", params);
  },
  query2: data => {
    return post("http://localhost:8081/data", data);
  }
};
