import React from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import {toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { useEffect } from "react";

const UpdateProgress = () => {
    const router = useRouter();
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [updates, setUpdates] = useState('');
  const [trlLevel, setTrlLevel] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if(!localStorage.getItem('token')){
      router.push('/')
    }
  }, [])

  const handleChange = (e) => {
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "updates") {
      setUpdates(e.target.value);
    } else if (e.target.name == "trlLevel") {
      setTrlLevel(e.target.value);
    } else if (e.target.name == "status") {
      setStatus(e.target.value);
    } else if (e.target.name == "date") {
      setDate(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, email, updates, trlLevel, status, date };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    // console.log(response);
    setTitle("");
    setEmail("");
    setUpdates("");
    setTrlLevel("");
    setStatus("");
    setDate("");
    toast.success('Your startup status has been updated', {
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
          <div className="container px-6 py-12 h-full">
            <div className="flex justify-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-10/12 lg:w-8/12 flex justify-center mb-2 pb-2 md:mb-0">
                <img src="/tisclogo.png" className="h-20" alt="TISC Logo" />
              </div>
              <h2 className="md:w-8/12 lg:w-8/12 md:mb-0 text-center text-3xl font-extrabold text-gray-900">
                Update your Startup's status
              </h2>
              <div className="md:w-8/12 lg:w-5/12">
                <form onSubmit={handleSubmit} method="POST">
                  
                  <div className="mb-6">
                    <input
                      value={title}
                      name="title"
                      onChange={handleChange}
                      type="text"
                      id="title"
                      required
                      autoComplete="title"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Title"
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
                  
                  <div className="mb-6">
                    <input
                      value={updates}
                      name="updates"
                      onChange={handleChange}
                      type="text"
                      id="updates"
                      required
                      autoComplete="updates"
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
                  <div className="mb-6">
                    <input
                      value={date}
                      name="date"
                      onChange={handleChange}
                      type="text"
                      id="date"
                      required
                      autoComplete="date"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Date"
                    />
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3  bg-cyan-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Update
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

export default UpdateProgress;
