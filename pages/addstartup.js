import React from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import {toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { useEffect } from "react";

const AddStartup = () => {
    const router = useRouter();
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [slug, setSlug] = useState('');
  const [updates, setUpdates] = useState('');
  const [trlLevel, setTrlLevel] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if(!localStorage.getItem('token')){
      router.push('/')
    }
  }, [])

  const handleChange = (e) => {
    if (e.target.name == "userId") {
      setUserId(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "slug") {
      setSlug(e.target.value);
    } else if (e.target.name == "updates") {
      setUpdates(e.target.value);
    } else if (e.target.name == "trlLevel") {
      setTrlLevel(e.target.value);
    } else if (e.target.name == "status") {
      setStatus(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { userId, email, slug, updates, trlLevel, status };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    // console.log(response);
    setUserId("");
    setEmail("");
    setSlug("");
    setUpdates("");
    setTrlLevel("");
    setStatus("");
    toast.success('Your startup has been added', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/mystartups`);
      }, 1500);
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
          <div className="container px-6 py-12 ">
            <div className="flex justify-center flex-wrap text-gray-800">
              <div className="md:w-8/12 lg:w-8/12 flex justify-center mb-1 pb-1 md:mb-0">
                <img src="/tisclogo.png" className="h-14" alt="TISC Logo" />
              </div>
              <div className="md:w-8/12 lg:w-8/12 flex justify-center mb-1 pb-1 md:mb-0">
              <h2 className="md:w-10/12 lg:w-10/12 md:mb-0 p-3 flex justify-center text-center text-3xl font-extrabold text-gray-900">
                Add Startup
              </h2>
              </div>
              <div className="md:w-8/12 lg:w-5/12 ">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="mb-6">
                    <input
                      value={userId}
                      name="userId"
                      onChange={handleChange}
                      type="text"
                      id="userId"
                      required
                      autoComplete="userId"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Title of the StartUp"
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
                      placeholder="Email Address"
                    />
                  </div>
                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      value={slug}
                      name="slug"
                      onChange={handleChange}
                      type="text"
                      id="slug"
                      required
                      autoComplete="slug"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Slug"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      value={updates}
                      name="updates"
                      onChange={handleChange}
                      type="text"
                      id="updates"
                      required
                      autoComplete="Updates"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Updates"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      value={trlLevel}
                      name="trlLevel"
                      onChange={handleChange}
                      type="text"
                      id="trlLevel"
                      required
                      autoComplete="trlLevel"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="TRL Level"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      value={status}
                      name="status"
                      onChange={handleChange}
                      type="text"
                      id="status"
                      required
                      autoComplete="status"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Status"
                    />
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Create
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddStartup;
