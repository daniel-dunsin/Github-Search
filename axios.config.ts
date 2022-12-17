import axios from "axios";

export const fetchGithub = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
  },
});
