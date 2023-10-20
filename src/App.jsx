import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import { useState } from 'react';





function App() {
  const [theme, setTheme] = useState(false)

  if (theme) {
    document.documentElement.setAttribute('data-theme', "dark");
  }
  else {
    document.documentElement.setAttribute('data-theme', "light");
  }

  return (
    <>
      <div>
        <NavBar theme={theme} setTheme={setTheme} />
        <Outlet />
        <Footer />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>


  )
}

export default App
