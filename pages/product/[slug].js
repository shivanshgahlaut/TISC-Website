import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  const {slug} = router.query
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
      <h1 className="text-3xl font-bold p-10">{slug}</h1>
      <ol className="ml-6 border-l-2 border-cyan-800">
        {info.map((item) => {
          return (
            <div key={item._id}>
              
                <li>
                  <div className="flex flex-start items-center">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      {item.trlLevel}
                    </h4>
                  </div>
                  <div className="ml-6 mb-6 pb-6">
                    <span
                      className="text-cyan-700 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                    >
                      {item.date}
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
            </div>
          );
        })}
        </ol>
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/updateprogress`}>
          <button
            type="submit"
            className="inline-block my-3 px-7 py-3 bg-cyan-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Update
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Post;
