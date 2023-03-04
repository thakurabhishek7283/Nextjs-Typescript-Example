export default function CreateCard() {
  return (
    <div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="rc-name" className="sr-only">
              Recipient Name
            </label>
            <input
              id="rc-name"
              name="recipientName"
              type="text"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="contact-number" className="sr-only">
              Contact Number
            </label>
            <input
              id="contact-number"
              name="contactN"
              type="text"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Contact No."
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
