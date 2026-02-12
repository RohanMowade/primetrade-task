import axios from 'axios';

// Use environment variable or fallback to localhost for development
// For production, we'll set this in Netlify
const API = axios.create({ 
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
});

// Request interceptor to add token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
