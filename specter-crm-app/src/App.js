import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Orders from "./components/orders/orders";
function App() {
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
