import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RESULT_DETAILS_BASE_URL,
});