import { editContact } from "@/lib/api";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

export interface ContactItemInf {
  id: string;
  contactName: string;
  contactNumber: string;
}
interface ReactProp {
  ContactItem: ContactItemInf;
  setContacts: Dispatch<
    SetStateAction<
      {
        id: string;
        contactName: string;
        contactNumber: string;
      }[]
    >
  >;
}

const MemoContactCard = React.memo(
  ({ ContactItem, setContacts }: ReactProp) => {
    const [isEditable, setEditable] = React.useState(false);

    const EditContactState = useRef<ContactItemInf>({
      contactName: ContactItem.contactName,
      contactNumber: ContactItem.contactNumber,
      id: ContactItem.id,
    });

    const handleEditContact = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      editContact(EditContactState.current, EditContactState.current.id);
      setEditable(true);
    };

    const handleEditChanges = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setContacts((prev): any => {
        const t = prev.map((p) => {
          return p.id != EditContactState.current.id
            ? p
            : {
                contactName: EditContactState.current.contactName,
                id: EditContactState.current.id,
                contactNumber: EditContactState.current.contactNumber,
              };
        });
        console.log(t);
        return t;
      });
      setEditable(false);
      // above logic should be replace with useContext and also maintain Authentication
    };

    return (
      <div
        className={`h-30 text-center font-semibold py-8 bg-teal-500 rounded-md mx-1 relative ${
          isEditable ? "h-50 py-5" : ""
        }`}
      >
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
          {ContactItem.contactName}
        </div>
        <div
          className={isEditable ? "border-double" : ""}
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          onInput={(e) =>
            (EditContactState.current.contactNumber = e.currentTarget.innerText)
          }
        >
          {ContactItem.contactNumber}
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
  }
);

export default MemoContactCard;
