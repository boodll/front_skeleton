import { Route, Routes } from "react-router";
import Signup from './component/Signup'
import SignIn from "./component/SignIn";

const UserMain = () =>{
  return (
    <div>
      <h1>User Main</h1>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </div>
  )
}

export default UserMain