import { useState } from "react";

export default function useUser() {
  const getUser = () => {
    const tokenString = localStorage.getItem("token") as string;
    const userToken = JSON.parse(tokenString);
    return userToken?.user_id;
  };

  const [user, setUser] = useState(getUser());

  return {
    user,
  };
}
