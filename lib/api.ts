import { ContactItemInf } from "@/components/c_card";
import GlobalProvider, { GlobalContextProvInf } from "@/context/globalContext";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const router = useRouter();

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile") as string).token
    }`;
  }

  return req;
});


export const signIn = (formData : any) =>{ 
    try{
        const res : any = API.post("/auth/signin", formData)
        const {data}  = res;
        const {handleLoginState} = useContext(GlobalProvider) as GlobalContextProvInf
        handleLoginState(true);
        localStorage.setItem("profile", JSON.stringify(data));
        router.replace("/");
    }
    catch(error){
        console.log(error)
    }
}
export const signUp = (formData : any) => {
    try{
        const res : any = API.post("/auth/signup", formData)
        const {data}  = res;
        const {handleLoginState} = useContext(GlobalProvider) as GlobalContextProvInf
        handleLoginState(true);
        localStorage.setItem("profile", JSON.stringify(data));
        router.replace("/");
    }
    catch(error){
        console.log(error)
    } 
} 

export const editContact = (body: ContactItemInf, ContactId : string) => {
    try{
    API.patch(`/contacts/${ContactId}`, body)

    }
    catch(error){
        console.log(error)
    }
}
export const fetchContacts = () => {
    try{
    const res : any = API.get("/contacts")
    const {data} = res;
    const {handleContactList} = useContext(GlobalProvider) as GlobalContextProvInf
    handleContactList(data);
    }
    catch(error){
        console.log(error)
    }
};