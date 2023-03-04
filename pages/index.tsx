import CreateCard from "@/components/create_card";
import ContactList from "@/components/c_list";

export default function Home() {
  return (
    <main className="min-h-screen flex p-10">
      <div className="flex-1 lg:p-10">
        <div className="bg-slate-300 w-full h-full rounded-lg drop-shadow-md min-h-[20vh] max-h-[60vh]">
          <ContactList />
        </div>
      </div>
      <div className="flex-1 lg:p-10">
        <div className="bg-stone-300 w-full h-full rounded-lg drop-shadow-md min-h-[20vh] max-h-[60vh]">
          <div className="text-center text-xl font-bold p-10">Add Contact</div>
          <div className="p-10">
            <CreateCard />
          </div>
        </div>
      </div>
    </main>
  );
}
