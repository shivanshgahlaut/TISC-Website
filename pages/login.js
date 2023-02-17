import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])
  
  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setEmail("");
    setPassword("");
    if (response.success) {
      localStorage.setItem('token', response.token)
      toast.success("You are successfully logged in", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}`);
      }, 1500);
    } else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className={styles.container}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className={styles.main}>
        <section className="h-screen">
          <div className="container px-6 py-24 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-12/12 lg:w-12/12 w-full  md:mb-0 flex justify-center">
                <img src="/tisclogo.png" className=" h-20" alt="TISC Logo" />
              </div>
              <h2 className="md:w-8/12 lg:w-8/12 w-full md:mb-0 text-center text-3xl font-extrabold text-gray-900">
                Login
              </h2>

              <div className="md:w-8/12 lg:w-5/12 ">
                <form onSubmit={handleSubmit} method="POST">
                  {/* <!-- Email input --> */}
                  <div className="mb-6">
                    <input
                      value={email}
                      name="email"
                      onChange={handleChange}
                      type="email"
                      id="email"
                      required
                      autoComplete="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>
                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      value={password}
                      name="password"
                      onChange={handleChange}
                      type="password"
                      id="password"
                      required
                      autoComplete="current-password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    {/* <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="remember-me"
                        name="remember-me"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div> */}
                    <Link
                      href={"/forgot"}
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-cyan-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account? &nbsp;
                    <Link
                      href={"/signup"}
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Sign Up Now
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

export default Login;
