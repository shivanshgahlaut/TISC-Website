import mongoose from "mongoose";
import React from "react";
import Product from "../models/Product";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";


const AllStartups = ({startups}) => {
    const router = useRouter();
    useEffect(() => {
        if(!localStorage.getItem('token')){
          router.push('/')
        }
      }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1 className="text-3xl font-bold p-12">All StartUps</h1>
        {/* {startups.map((item)=>{
          return <div key={item._id} className={styles.card}>
          <Link href={`/allstartups/${item.userId}`}>
            <h2>{item.userId}</h2>
            <h3>{item.trlLevel}</h3>
            <p>{item.updates}</p>
          </Link>
        </div>
        })} */}

      <ol className="ml-6 border-l-2 border-cyan-800 ">
                <li>
                  <div className="flex flex-start items-center pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 1
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 1"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                    <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 2
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 2"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 3
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 3"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 4
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 4"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 5
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 5"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 6
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 6"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 7
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 7"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 8
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 8"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
                <li>
                  <div className="flex flex-start items-center pt-6 pb-2">
                    <div className="bg-cyan-800 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                      TRL 9
                    </h4>
                  </div>
                  {startups.map((item) => {
                    if(item.trlLevel == "TRL 9"){
                      return(
                        <div className="ml-1 mb-1 mt-1 p-4">
                          <Link href={`/allstartups/${item.userId}`}>
                          <span className="text-gray-800 mt-2 mb-4 font-semibold">{item.userId} -</span><span className="text-gray-700 mt-2 mb-4"> Click here for updates...</span></Link>
                  </div>
                      )
                  }})}
                </li>
        </ol>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }
    let startups = await Product.find();
    return {
      props: { startups: JSON.parse(JSON.stringify(startups)) },
    };
  }

export default AllStartups;
