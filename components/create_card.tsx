import { GlobalContext, GlobalContextProvInf } from "@/context/globalContext";
import { createContact } from "@/lib/api";
import { useContext, useState } from "react";

const initial = {
  contactName: "",
  contactNumber: "",
};
export default function CreateCard() {
  const { handleContactEditStore } = useContext(
    GlobalContext
  ) as GlobalContextProvInf;
  const [formdata, setFormData] = useState(initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await createContact(formdata);
      console.log(data);
      setFormData(initial);
      handleContactEditStore(data);
      console.log("fininshed");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="rc-name" className="sr-only">
              Recipient Name
            </label>
            <input
              id="rc-name"
              name="contactName"
              type="text"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Name"
              onChange={handleChange}
              value={formdata.contactName}
            />
          </div>
          <div>
            <label htmlFor="contact-number" className="sr-only">
              Contact Number
            </label>
            <input
              id="contact-number"
              name="contactNumber"
              type="text"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Contact No."
              onChange={handleChange}
              value={formdata.contactNumber}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
