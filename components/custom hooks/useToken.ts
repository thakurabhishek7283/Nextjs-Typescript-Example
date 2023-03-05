import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    if (typeof window !== "undefined") {
      const tokenString = localStorage.getItem("token") as string;
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    } else {
      return undefined;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
