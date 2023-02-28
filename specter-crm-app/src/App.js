import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Orders from "./components/orders/orders";

function getToken () {
  if (localStorage.getItem('token') !== null)
  {
    return localStorage.getItem('token');
  } else {
    return null;
  }
}

function App() {
  const [token,setToken] = useState(getToken);
  if(!token){
    return < Login setToken={setToken} />
  }
  return (
    <main class="">
    <div class="row background-image w-100 m-0">
      <Routes>
        <Route path="/" element={< Dashboard />}/>
        <Route path="/Orders" element={< Orders />}/>
      </Routes>
  </div>  
  </main>
  );
}

export default App;
