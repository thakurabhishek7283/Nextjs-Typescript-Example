import { createContext } from "react";

export interface GlobalContextProvInf {
  GlobalState: GlobalContextInf;
  handleContactList: (data: any) => void;
  handleContactEditStore: (data: any) => void;
  handleDeleteContactStore: (data: any) => void;
}
export interface GlobalContextInf {
  contactList: {
    id: string;
    contactName: string;
    contactNumber: string;
  }[];
}
export const GlobalContext = createContext<GlobalContextProvInf | null>(null);
