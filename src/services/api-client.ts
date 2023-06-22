import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e91dfbf6dfd64f248e9b33dfd3dd982e",
  },
});
