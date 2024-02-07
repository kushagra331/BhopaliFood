import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useContext, useState } from 'react';
// import { useState } from 'react';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import About from './components/About';
import { Provider } from 'react-redux';
import RStore from './utils/ReduxStore'
function App() {
  // const [user, setUser]=useState({
  //   name:"Akshay Saini",
  //   email:"support@namastedev.com"
  // });
  // const {user}=useContext(UserContext);
  // const [details,setDetails]=useState({
  //     name:"kushagra",
  //   // email:"kushagra@gmail.com",
  //   // defimg:"random"
  //     defimg:"random"
  // });
  const {user}=useContext(UserContext);
  const [damm,setDamm]=useState(user);
  return (
    <Provider store={RStore}>
      {/* <UserContext.Provider value={{
        details:details,
        setDetails:setDetails
      }}> */}
      <UserContext.Provider value={{
        damm:damm,
        setDamm:setDamm
      }}>
        <Header/>
        <div className='mt-14'>
          <Outlet/>
        </div>
        <Footer/>
      </UserContext.Provider>
      {/* </UserContext.Provider> */}
    </Provider>
  );
}

export default App;
