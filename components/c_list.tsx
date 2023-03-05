import { GlobalContext, GlobalContextProvInf } from "@/context/globalContext";
import { useContext } from "react";
import MemoContactCard from "./c_card";

export default function ContactList() {
  const { GlobalState } = useContext(GlobalContext) as GlobalContextProvInf;
  return (
    <div className="space-y-3 overflow-y-scroll h-full">
      {GlobalState?.contactList?.map((Contact) => {
        return <MemoContactCard key={Contact.id} contactItem={Contact} />;
      })}
    </div>
  );
}
