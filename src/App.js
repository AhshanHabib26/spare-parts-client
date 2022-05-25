import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Common/Navbar";
import AddReview from "./Components/Dashboard/AddReview";
import AllUser from "./Components/Dashboard/AllUser";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyOrders from "./Components/Dashboard/MyOrders";
import MyProfile from "./Components/Dashboard/MyProfile";
import Payment from "./Components/Dashboard/Payment";
import UpdateProfile from "./Components/Dashboard/UpdateProfile";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Footer from "./Components/Pages/Home/Footer";
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
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders/>}/>
          <Route path="addreview" element={<AddReview/>}/>
          <Route path="myprofile" element={<MyProfile/>}/>
          <Route path="alluser" element={<AllUser/>}/>
          <Route path="payment/:id" element={<Payment/>}/>
          <Route path="myprofile/update" element={<UpdateProfile/>}/>
        </Route>
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
