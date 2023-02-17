import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import {toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    // console.log(response);
    setEmail("");
    setName("");
    setPassword("");
    toast.success('Your account has been created', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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
              <div className="md:w-12/12 lg:w-12/12 w-full md:mb-0 flex justify-center">
                <img src="/tisclogo.png" className="h-20" alt="TISC Logo" />
              </div>
              <h2 className="md:w-8/12 lg:w-8/12 w-full md:mb-0 text-center text-3xl font-extrabold text-gray-900">
                Sign Up
              </h2>
              <div className="md:w-8/12 lg:w-6/12 ">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="mb-6">
                    <input
                      value={name}
                      name="name"
                      onChange={handleChange}
                      type="text"
                      id="name"
                      required
                      autoComplete="name"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Full Name"
                    />
                  </div>
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

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-cyan-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account? &nbsp;
                    <Link
                      href={"/login"}
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Login
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

export default Signup;
