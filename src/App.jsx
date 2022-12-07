import React, { useState, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";

import { actions, initialState, reducer } from "./state/reducer";

import Header from "./components/Header";
import Home from "./components/Home";
import SignInUser from "./components/SignInUser";
import RegisterUser from "./components/RegisterUser";
import ViewUser from "./components/ViewUser";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:200/getAllUsers");
        const data = await res.json();
        dispatch({ type: actions.SET_ALL_USER, payload: data.users });
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
        <Route
          path="/registerUser"
          element={
            <RegisterUser allUsers={state.allUsers} dispatch={dispatch} />
          }
        />
        <Route path="/signInUser" element={<SignInUser />} />
        <Route
          path="/"
          element={<Home allUsers={state.allUsers} dispatch={dispatch} />}
        />
        <Route path="/viewApplicant" element={<ViewUser user={state.user} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
