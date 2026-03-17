// Axios instance pre-configured for the FastAPI backend
// TODO: [Phase 2] import apiClient here and replace dummy data arrays with actual API calls
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
