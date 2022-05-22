import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Pages/Home/Home";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Login from "./Components/Pages/Register/Login";
import SignUp from "./Components/Pages/Register/SignUp";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
