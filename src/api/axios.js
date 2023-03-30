import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c35643ab3a139001e37c1f9302c4ae5f",
    language: "ko-KR",
  },
});

export default instance;
