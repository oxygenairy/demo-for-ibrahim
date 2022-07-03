
import {Outlet } from "react-router-dom";
import './App.css';

//custom import
import {BrowserRouter, Routes, Route} from "react-router-dom";

//pages
import About from "./pages/about";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import Landing from "./pages/landing";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Direction />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="landing" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Direction = () => {
  return (
    
    <Outlet />
 
  );
}

export default App;
