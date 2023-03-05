import { GlobalContext, GlobalContextProvInf } from "@/context/globalContext";
import { deleteContact, editContact } from "@/lib/api";
import React, { useContext, useRef } from "react";

export interface ContactItemInf {
  id: string;
  contactName: string;
  contactNumber: string;
}
interface ReactProp {
  contactItem: ContactItemInf;
}

const MemoContactCard = React.memo(({ contactItem }: ReactProp) => {
  const [isEditable, setEditable] = React.useState(false);

  const EditContactState = useRef<ContactItemInf>({
    contactName: contactItem.contactName,
    contactNumber: contactItem.contactNumber,
    id: contactItem.id,
  });

  const { handleDeleteContactStore } = useContext(
    GlobalContext
  ) as GlobalContextProvInf;

  const handleEditContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditable(true);
  };
  const handleDeleteContact = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      await deleteContact(contactItem.id);
      handleDeleteContactStore(contactItem.id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditChanges = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      (await editContact(
        EditContactState.current,
        EditContactState.current.id
      )) as any;

      setEditable(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`h-30 text-center font-semibold py-8 bg-teal-500 rounded-md mx-1 relative ${
        isEditable ? "h-50 py-5" : ""
      }`}
    >
      <button
        className="absolute top-0 left-0 ml-5 mt-3"
        onClick={handleDeleteContact}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
      <button
        className="absolute top-0 right-0 mr-5 mt-3"
        onClick={handleEditContact}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
      <div
        className={isEditable ? "border-double" : ""}
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        onInput={(e) =>
          (EditContactState.current.contactName = e.currentTarget.innerText)
        }
      >
        {contactItem.contactName}
      </div>
      <div
        className={isEditable ? "border-double" : ""}
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        onInput={(e) =>
          (EditContactState.current.contactNumber = e.currentTarget.innerText)
        }
      >
        {contactItem.contactNumber}
      </div>
      <div className="mt-2">
        {isEditable && (
          <button
            onClick={handleEditChanges}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
});

export default MemoContactCard;
