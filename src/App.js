import './App.css';
import Home from './pages/home/Home';
import Testimonies from './pages/testimonies/Testimonies';
import Team from './pages/team/Team';
import Contact from './pages/contact/Contact';
import Resources from './pages/resources/Resources';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet  
} from "react-router-dom";
import Navbar from './Layout/navbar/Navbar';
import Footer from './Layout/footer/Footer';




function App() {

  const Layout = ()=>{
    return (
      <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/testimonies",
          element: <Testimonies/>
        },
        {
          path:"/team",
          element:<Team/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/resources",
          element:<Resources/>
        },
      ]
    },
  ]);


  return (
    <>
   <RouterProvider router={router} />
    </>
  );
}

export default App;
