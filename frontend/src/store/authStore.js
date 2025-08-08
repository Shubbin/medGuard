import { create } from "zustand";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "https://medguardapi.onrender.com/api/auth"
    : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => {
  // Initial state
  const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isCheckingAuth: true,
    error: null,
    message: null,
  };

  // Reusable error extractor
  const extractError = (error) =>
    error?.response?.data?.message || "An error occurred";

  return {
    ...initialState,

    // ✅ Check if user is authenticated
    checkAuth: async () => {
      set({ isCheckingAuth: true, error: null });
      try {
        const response = await axios.get(`${API_URL}/check-auth`);
        set({
          user: response.data.user,
          isAuthenticated: true,
          isCheckingAuth: false,
        });
      } catch (error) {
        set({
          ...initialState,
          isCheckingAuth: false,
        });
      }
    },

    // ✅ Signup new user
    signup: async (email, password, name) => {
      set({ isLoading: true, error: null });
      try {
        const res = await axios.post(`${API_URL}/signup`, {
          email,
          password,
          name,
        });
        set({
          user: res.data.user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        set({ error: extractError(error), isLoading: false });
        throw error;
      }
    },

    // ✅ Login
    login: async (email, password) => {
      set({ isLoading: true, error: null });
      try {
        const res = await axios.post(`${API_URL}/login`, {
          email,
          password,
        });
        set({
          user: res.data.user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        set({ error: extractError(error), isLoading: false });
        throw error;
      }
    },

    // ✅ Logout
    logout: async () => {
      set({ isLoading: true, error: null });
      try {
        await axios.post(`${API_URL}/logout`);
        set({ ...initialState, isCheckingAuth: false });
      } catch (error) {
        set({ error: extractError(error), isLoading: false });
        throw error;
      }
    },

    // ✅ Email verification
    verifyEmail: async (code) => {
      set({ isLoading: true, error: null });
      try {
        const res = await axios.post(`${API_URL}/verify-email`, { code });
        set({
          user: res.data.user,
          isAuthenticated: true,
          isLoading: false,
        });
        return res.data;
      } catch (error) {
        set({ error: extractError(error), isLoading: false });
        throw error;
      }
    },

    // ✅ Forgot Password
    forgotPassword: async (email) => {
      set({ isLoading: true, error: null });
      try {
        const res = await axios.post(`${API_URL}/forgot-password`, { email });
        set({ message: res.data.message, isLoading: false });
      } catch (error) {
        set({ error: extractError(error), isLoading: false });
        throw error;
      }
    },

    // ✅ Reset Password
    resetPassword: async (token, password) => {
      set({ isLoading: true, error: null });
      try {
        const res = await axios.post(`${API_URL}/reset-password/${token}`, {
          password,
        });
        set({ message: res.data.message, isLoading: false });
      } catch (error) {
        set({ error: extractError(error), isLoading: false });
        throw error;
      }
    },
  };
});
