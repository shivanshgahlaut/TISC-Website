import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Forgot = () => {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className="h-screen">
          <div className="container px-6 py-48 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-12/12 lg:w-12/12 w-full p-1 md:mb-0 flex justify-center">
                <img src="/tisclogo.png" className="h-20" alt="TISC Logo" />
              </div>
              <h2 className="md:w-8/12 lg:w-8/12 w-full mb-0 p-0 text-center text-3xl font-extrabold text-gray-900">
                Forgot Password
              </h2>

              <div className="md:w-8/12 lg:w-5/12 mt-0 p-1">
                <form>
                  {/* <!-- Email input --> */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3  bg-cyan-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Continue
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Remember your password? &nbsp;
                    <Link
                      href={"/login"}
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Login Now
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Forgot;
