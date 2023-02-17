import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Myinfo = () => {
  const router = useRouter();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchInfo = async () => {
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getinfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      });
      let res = await a.json();
      const info = res.info;
      setInfo(res.info);
      console.log(res);
    };
    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      fetchInfo();
    }
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      {/* <h1>{slug}</h1> */}
        {info.map((item) => {
          return (
            <div key={item._id}>
              <ol className="ml-6 border-l-2 border-blue-600">
                <li>
                  <div className="flex flex-start items-center">
                    <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      {item.trlLevel}
                    </h4>
                  </div>
                  <div className="ml-6 mb-6 pb-6">
                    <span
                      href="#!"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                    >
                      {item.createdAt}
                    </span>
                    <p className="text-gray-700 mt-2 mb-4">{item.status}</p>
                    <p className="text-gray-700 mt-2 mb-4">{item.updates}</p>
                    {/* <button
                              type="button"
                              className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Read more
                            </button> */}
                  </div>
                </li>
              </ol>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Myinfo;
