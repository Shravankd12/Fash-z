import axios from "axios";

// API base URL
const BASE_URL = "http://localhost:8080/api/login"; // Replace with your backend URL

// Function to log in a user
export const login = async ({ username, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/check`, { username, password });
    return response.data; // Assuming the backend responds with user details or a success message
  } catch (error) {
    throw new Error(error.response?.data || "Invalid Username or Password");
  }
};

// Function to sign up a new user
export const signup = async ({ username, email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/create`, {
      username,
      email,
      password,
    });
    return response.data; // Assuming the backend responds with a success message or user details
  } catch (error) {
    throw new Error(error.response?.data || "Error signing up");
  }
};
