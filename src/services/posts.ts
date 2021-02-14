/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const getPosts = (params: { page: string; limit: string }) => {
  return axios.get(`http://localhost:5000/posts/getall?limit=30&page=1`);
};
