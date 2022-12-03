import React, { useState } from "react";

const Home = ({ users }) => {
  return (
    <div className="mt-5 container" style={homeStyle}>
      {users?.map((i) => {
        return (
          <div key={i._id} className="card shadow">
            <div
              style={{
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
              <button className="btn btn-success">See Profile</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const homeStyle = {
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(4, 1fr)",
};

export default Home;
