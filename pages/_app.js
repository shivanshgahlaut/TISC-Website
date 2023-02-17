import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
  router.events.on('routeChangeStart', ()=>{
    setProgress(40)
  })
  router.events.on('routeChangeComplete', ()=>{
    setProgress(100)
  })

  const token = localStorage.getItem('token')
    if(token){
      setUser({value: token})
      setKey(Math.random())
    }
  }, [router.query])
  const logout = ()=>{
    localStorage.removeItem('token')
    setUser({value:null})
    setKey(Math.random())
    router.push('/')
  }
  

  return<>
    <LoadingBar
        color='teal'
        progress={progress}
        waitingTime = {400}
        onLoaderFinished={() => setProgress(0)}
      />
    {/* {key && <Navbar logout={logout} user={user} key={key}/>} */}
    <Navbar logout={logout} user={user} key={key}/>
    {/* <Sidenav user={user} key={key} /> */}
    <Component {...pageProps} />
    <Footer/>
  </> 
}

export default MyApp
