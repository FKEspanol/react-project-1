import React, { useState } from "react";

const Home = ({ users }) => {
  return (
    <div className="row justify-content-evenly mt-5">
      {users?.map((i) => {
        return (
          <div
            key={i._id}
            className="card text-white bg-success mb-3 col-3"
            style={{ maxWidth: "20rem" }}
          >
            <div className="card-header">Header</div>
            <div
              style={{
                paddingBottom: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={i.picture}
                className=""
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
              <h4 className="card-title">
                {i.firstname} {i.lastname}
              </h4>
              <p className="card-text">{`Hi I am ${i.firstname}, ${i.age} years old, and I'm a ${i.job}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
