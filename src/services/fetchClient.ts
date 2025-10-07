// src/api/fetchClient.ts
import { useAuthStore } from "../store/useAuthStore";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/";

interface FetchOptions extends RequestInit {
  auth?: boolean; // whether to attach auth header
}

export async function fetchClient(endpoint: string, options: FetchOptions = {}) {
  const { auth = true, headers, ...rest } = options;
  const { token, logout } = useAuthStore.getState(); // access store directly

  const finalHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (auth && token) {
    finalHeaders["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: finalHeaders,
      ...rest,
    });

    // --- Response Interceptor ---
    if (response.status === 401) {
      logout(); // auto logout on unauthorized
      throw new Error("Unauthorized");
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || response.statusText);
    }

    // parse JSON safely
    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}
