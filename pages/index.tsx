import CreateCard from "@/components/create_card";
import ContactList from "@/components/c_list";

import { useContext, useEffect } from "react";

import { fetchContacts } from "@/lib/api";
import { GlobalContext, GlobalContextProvInf } from "@/context/globalContext";
import useToken from "@/components/custom hooks/useToken";
import { useRouter } from "next/router";
import useUser from "@/components/custom hooks/useUser";
import Layout from "@/components/layout";

export default function Home() {
  const { token, setToken } = useToken();

  const router = useRouter();
  const { handleContactList } = useContext(
    GlobalContext
  ) as GlobalContextProvInf;
  useEffect(() => {
    if (!token) {
      router.replace("/auth/");
    }
    const fetchData = async () => {
      try {
        const { data } = await fetchContacts();
        handleContactList(data.contactList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token, router]);

  return (
    <Layout>
      <main className="min-h-screen flex p-10">
        <div className="flex-1 lg:p-10">
          <div className="bg-slate-300 w-full h-full rounded-lg drop-shadow-md min-h-[20vh] max-h-[60vh]">
            <ContactList />
          </div>
        </div>
        <div className="flex-1 lg:p-10">
          <div className="bg-stone-300 w-full h-full rounded-lg drop-shadow-md min-h-[20vh] max-h-[60vh]">
            <div className="text-center text-xl font-bold p-10">
              Add Contact
            </div>
            <div className="p-10">
              <CreateCard />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
