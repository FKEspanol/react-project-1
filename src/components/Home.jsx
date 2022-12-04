import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ users, setUsers, setApplicant }) => {
  const deleteUser = async (_id) => {
    try {
      const res = await fetch(`http://localhost:200/deleteUser/${_id}`, {
        method: "delete",
      });
      const data = await res.json();
      if (data.result === "ok") {
        let newUsers = users?.filter((i) => i._id !== _id);
        setUsers([...newUsers]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5 home">
      <div className="my-container">
        {users?.map((i) => {
          return (
            <div key={i._id} className="card shadow">
              <div
                style={{
                  width: "100%",
                  paddingBottom: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={i.picture}
                  className="p-2"
                  alt={`${i.firstname}'s profile photo`}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
              <div className="card-body">
                <h4 className="card-title text-success">
                  {i.firstname} {i.lastname}
                </h4>
                <p className="card-text">{`Hi I am ${i.firstname}, ${i.age} years old, and I'm a ${i.job}`}</p>
                <Link
                  to="/viewApplicant"
                  className="btn btn-success me-2"
                  onClick={() => setApplicant(i)}
                >
                  See Profile
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(i._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const homeStyle = {
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(4, 1fr)",
};

export default Home;
