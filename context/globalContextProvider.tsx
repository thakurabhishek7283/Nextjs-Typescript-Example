import { useState } from "react";
import { GlobalContext, GlobalContextInf } from "./globalContext";

const initial = {
  contactList: [
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

  const handleContactList = (data: any) => {
    let t = data?.map((d: any) => {
      return {
        id: d._id,
        contactName: d.contactName,
        contactNumber: d.contactNumber,
      };
    });
    if (typeof t == "undefined") {
      t = [];
    }
    SetGlobalState({ contactList: t });
  };
  const handleContactEditStore = (data: any) => {
    SetGlobalState((prev): any => {
      const t = prev.contactList?.filter((Contact) => Contact.id != data._id);
      t?.push({
        id: data._id,
        contactName: data.contactName,
        contactNumber: data.contactNumber,
      });
      if (typeof t == "undefined") {
        return {
          contactList: [
            {
              id: data._id,
              contactName: data.contactName,
              contactNumber: data.contactNumber,
            },
          ],
        };
      } else {
        return { contactList: t };
      }
    });
    console.log(GlobalState);
  };
  const handleDeleteContactStore = (contactId: string) => {
    SetGlobalState((prev): any => {
      const t = prev.contactList.filter((contact) => {
        return contact.id != contactId;
      });
      return { contactList: t };
    });
    console.log(GlobalState);
  };

  return (
    <GlobalContext.Provider
      value={{
        GlobalState,
        handleContactList,
        handleContactEditStore,
        handleDeleteContactStore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
