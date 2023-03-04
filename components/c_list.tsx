import { useEffect, useState } from "react";
import MemoContactCard from "./c_card";

export default function ContactList() {
  const [Contacts, setContacts] = useState([
    { id: "1", contactName: "Abhishek", contactNumber: "93948948" },
    { id: "2", contactName: "Thakur", contactNumber: "93948948" },
  ]);
  //   useEffect(() => {
  //     fetch("")
  //       .then((res) => res.json())
  //       .then((res) => console.log);
  //   });
  return (
    <div className="space-y-3 overflow-y-scroll h-full">
      {Contacts.map((Contact) => {
        return (
          <MemoContactCard
            key={Contact.id}
            ContactItem={Contact}
            setContacts={setContacts}
          />
        );
      })}
    </div>
  );
}
