import { Route,Routes } from "react-router-dom";
import { Signup } from "./Signup";
import Login from "./Login";
import Home from "./Home";

export const AllRoutes = () => {
      return (
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
            </Routes>
      )
}