import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile") as string).token
    }`;
  }

  return req;
});

export const signIn = (formData: any) => {
  return API.post("/auth/signin", formData);
};
export const signUp = (formData: any) => {
  return API.post("/auth/signup", formData);
};
export const createContact = (body: any) => {
  return API.post("/contacts");
};
export const editContact = (body: any, ContactId: string) => {
  return API.patch(`/contacts/${ContactId}`, body);
};
export const fetchContacts = () => {
  return API.get("/contacts");
};
