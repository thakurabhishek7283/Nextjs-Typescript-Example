import useToken from "@/components/custom hooks/useToken";
import Layout from "@/components/layout";
import { GlobalContext, GlobalContextProvInf } from "@/context/globalContext";
import { signIn } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Login() {
  const { token, setToken } = useToken();

  const router = useRouter();
  if (token) {
    router.replace("/");
  }
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await signIn(formdata);
      setToken(data);
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <Layout>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20">
          <div className="p-8 w-full max-w-md space-y-8 shadow-2xl sm:rounded-lg">
            <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
                <div>
                  <a
                    href="/auth/signup"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Not a user ?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
