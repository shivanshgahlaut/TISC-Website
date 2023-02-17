import React from 'react'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from 'react';
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Mystartups = () => {
    const router = useRouter();
    const [startups, setStartups] = useState([])
    useEffect(() => {
      const fetchStartups = async ()=>{
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getstartups`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({token: localStorage.getItem('token')}),
        })
          let res = await a.json()
          const startups = res.startups;
          setStartups(res.startups)
          console.log(res)
      }
      if(!localStorage.getItem('token')){
        router.push('/')
      }
      else{
        fetchStartups();
      }
      
      }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1 className="text-3xl font-bold p-6">My StartUp</h1>
        {startups.map((item)=>{
          return <div key={item._id} className={styles.card}>
          <Link href={`/product/${item.userId}`}>
            {/* <img src="bg1.jpg" alt="Image"> */}
            <h2>{item.userId}</h2>
            <h3>{item.trlLevel}</h3>
            <p>{item.updates}</p>
          </Link>
        </div>
        })}
        {!startups.length>0 && <Link href={`${process.env.NEXT_PUBLIC_HOST}/addstartup`}>
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-cyan-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Add a New StartUp
          </button>
        </Link>}
      </main>
    </div>
  )
}

export default Mystartups