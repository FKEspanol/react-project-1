import React from "react";

const ViewApplicant = ({ applicant }) => {
  // console.log(applicant._id);
  if (!applicant) return <h1>Page Not Found</h1>;
  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div key={applicant._id} className="card shadow col-md-4">
        <div
          style={{
            width: "100%",
            paddingBottom: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={applicant.picture}
            className="p-2"
            alt={`${applicant.firstname}'s profile photo`}
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
            {applicant.firstname} {applicant.lastname}
          </h4>
          <p className="card-text">{`Hi I am ${applicant.firstname}, ${applicant.age} years old, and I'm a ${applicant.job}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicant;
