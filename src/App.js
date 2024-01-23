import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import About from './components/About';


function App() {
  // const
  return (
    <div className="App">
      <Header/>
      <div className='pt-14'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}


export default App;
