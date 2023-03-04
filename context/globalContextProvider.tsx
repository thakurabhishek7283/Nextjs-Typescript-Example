import { useState } from "react";
import { GlobalContext, GlobalContextInf } from "./globalContext";

const initial = {
  ContactList: [
    {
      id: "",
      contactName: "",
      contactNumber: "",
    },
  ],
};

// NextComponentType<NextPageContext, any, any>
const GlobalProvider: any = ({ children }: any) => {
  const [GlobalState, SetGlobalState] = useState<GlobalContextInf>(initial);
  console.log("global context provider");

  const handleContactList = (data: any) => {
    SetGlobalState((prev) => {
      return { ...prev, ContactList: data };
    });
  };
  const handleContactEditStore = (data: any) => {
    const updatedContactList = GlobalState.ContactList.filter((Contact) => {
      return Contact.id != data.id;
    });
    updatedContactList.push(data);
    SetGlobalState({ ContactList: updatedContactList });
  };

  return (
    <GlobalContext.Provider
      value={{
        GlobalState,
        handleContactList,
        handleContactEditStore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
