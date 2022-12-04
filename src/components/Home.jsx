import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ users, setUsers, setApplicant }) => {
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
                  className="btn btn-success"
                  onClick={() => setApplicant(i)}
                >
                  See Profile
                </Link>
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
