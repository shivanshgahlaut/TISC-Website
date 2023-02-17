import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = ({user, logout}) => {
  const [navbar, setNavbar] = useState(false);
  if(user.value){
  return (
    // <div>
    // <nav className={styles.mainnav}>
    //     <ul className={styles.mainnavul}>
    //       <Link href='/'><li className={styles.mainnavulli}>Home</li></Link>
    //       <Link href='/myaccount'><li className={styles.mainnavulli}>My Account</li></Link>
    //       <Link href='/mystartups'><li className={styles.mainnavulli}>My StartUp</li></Link>
    //       <Link href='/startups'><li className={styles.mainnavulli}>All StartUps</li></Link>
    //       <li onClick={logout} className={styles.mainnavulli}>Logout</li>
    //       {/* <span onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
    //       {dropdown && <div className="absolute bg-white shadow-lg text-black py-2 top-9 rounded-md px-5 ml-3 w-13">
    //         <ul className={styles.dropdown} onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
    //           <Link href='/myaccount'><li className="py-1 hover:text-slate-900 hover:cursor-pointer text-sm font-normal">My Account</li></Link>
    //           <Link href='/project'><li className="py-1 hover:text-slate-900 hover:cursor-pointer text-sm font-normal">My StartUps</li></Link>
    //           <li onClick={logout} className="py-1 hover:text-slate-900 hover:cursor-pointer text-sm font-normal">Logout</li>
    //         </ul>
    //       </div>}
    //       <li className={styles.mainnavulli} >User Name</li>
    //       </span> */}
    //     </ul>
    //   </nav>
    //   </div>
    <nav className="w-full bg-cyan-900 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-3 md:block">
              <a href="/">
                <h2 className="text-2xl text-white font-bold">IITJ TISC</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                {/* <li className="text-white">
                  <Link href="/myaccount">
                    My Account
                  </Link>
                </li> */}
                <li className="text-white">
                  <Link href="/mystartups">
                    My StartUp
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/startups">
                    All StartUps
                  </Link>
                </li>
                <li onClick={logout} className="text-white hover:cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>  
  )
  } else{
    return(
      // <nav className={styles.mainnav}>
      //     <ul className={styles.mainnavul}>
      //       <Link href='/'><li className={styles.mainnavulli}>Home</li></Link>
      //       <Link href='/login'><li className={styles.mainnavulli}>Login</li></Link>
      //       <Link href='/signup'><li className={styles.mainnavulli}>Sign Up</li></Link>
      //     </ul>
      //   </nav>
      <nav className="w-full bg-cyan-900 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-3 md:block">
              <a href="/">
                <h2 className="text-2xl text-white font-bold">IITJ TISC</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/login">
                    Login
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>  
      
    )
  }
}

export default Navbar