import React from "react";

const ViewApplicant = ({ user }) => {
  // console.log(user._id);
  if (!user) return <h1>Page Not Found</h1>;
  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div key={user._id} className="card shadow col-md-4">
        <div
          style={{
            width: "100%",
            paddingBottom: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={user.picture}
            className="p-2"
            alt={`${user.firstname}'s profile photo`}
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
            {user.firstname} {user.lastname}
          </h4>
          <p className="card-text">{`Hi I am ${user.firstname}, ${user.age} years old, and I'm a ${user.job}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicant;
