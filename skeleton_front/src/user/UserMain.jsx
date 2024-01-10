import { Route, Routes } from "react-router";
import Signup from './component/Signup'

const UserMain = () =>{
  return (
    <div>
      <h1>User Main</h1>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default UserMain