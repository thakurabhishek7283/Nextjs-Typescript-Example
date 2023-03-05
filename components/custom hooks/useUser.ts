import { useState } from "react";

export default function useUser() {
  const getUser = () => {
    if (typeof window !== "undefined") {
      const tokenString = localStorage.getItem("token") as string;
      const userToken = JSON.parse(tokenString);
      return userToken?.userId;
    }
  };

  const [userId, setUser] = useState(getUser());

  return {
    userId,
  };
}
