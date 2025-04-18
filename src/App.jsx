import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './Pages/Register';
import Write from './Pages/Write';
import Login from './Pages/Login';
import Single from './Pages/Single';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

// Layout Component - Common for Navbar & Footer
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders the matched child route */}
      <Footer />
    </>
  );
};

// Define routes with dynamic parameters and layout structure
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout used as the parent component
    children: [
      {
        path: "/",
        element: <Home />, // Home page
      },
      {
        path: "/post/:id", // Dynamic post route
        element: <Single />, // Single post page
      },
      {
        path: "/Write",
        element: <Write />, // Write a new post
      },
    ],
  },
  {
    path: "/Register",
    element: <Register />, // Register page
  },
  {
    path: "/Login",
    element: <Login />, // Login page
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
