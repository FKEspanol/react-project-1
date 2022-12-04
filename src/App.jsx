import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import SignInUser from "./components/SignInUser";
import RegisterUser from "./components/RegisterUser";
import ViewApplicant from "./components/ViewApplicant";

function App() {
  const [users, setUsers] = useState([]);
  const [applicant, setApplicant] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:200/getAllUsers");
        const data = await res.json();
        setUsers([...data.users]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <React.Fragment>
      <Header />
      {/* <Copy /> */}
      <Routes>
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/signInUser" element={<SignInUser />} />
        <Route
          path="/"
          element={
            <Home
              users={users}
              setUsers={setUsers}
              setApplicant={setApplicant}
            />
          }
        />
        <Route
          path="/viewApplicant"
          element={<ViewApplicant applicant={applicant} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
