import { NextComponentType, NextPageContext } from "next/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface GlobalContextProvInf {
  GlobalState: GlobalContextInf;
  handleLoginState: (isLoggedin: boolean) => void;
  handleContactList: (data: any) => void;
}
interface GlobalContextInf {
  isLoggedIn: boolean;
  ContactList: {
    id: string;
    contactName: string;
    contactNumber: string;
  }[];
}
// NextComponentType<NextPageContext, any, any>
const GlobalProvider: any = ({ children }: any) => {
  const [GlobalState, SetGlobalState] = useState<GlobalContextInf>({
    isLoggedIn: false,
    ContactList: [
      {
        id: "",
        contactName: "",
        contactNumber: "",
      },
    ],
  });
  const GlobalContext = createContext<GlobalContextProvInf | null>(null);
  const handleLoginState = (isLoggedin: boolean) => {
    console.log(isLoggedin);
  };
  const handleContactList = (data: any) => {
    console.log(data);
  };
  return (
    <GlobalContext.Provider
      value={{ GlobalState, handleLoginState, handleContactList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
