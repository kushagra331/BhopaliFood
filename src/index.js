import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';
import ErrorPage from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
// import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login'
import RestMenu from './components/RestMenu';
import Profile  from './components/Profile';
import Sub from './components/Sub';
import Cart from './components/CartPage';
const Instamart = lazy(()=>import('./components/Instamart'))
// import Instamart from './components/Instamart';
// import  Submenu from './components/Submenu';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",// parentPath/{path} => localhost:1244/about
        element: <About/>,
        children:[{
          path:"profile",// parentPath/{path} => localhost:1244/about/profile
          element:<Profile/>
        }]
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/restmenu/:id",
        element: <RestMenu/>
      },
      {
        path: "/instamart",
        element: 
        <Suspense fallback={<h1>Loading...</h1>}>
          <Instamart/>
        </Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/sub",
        element:<Sub/>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
