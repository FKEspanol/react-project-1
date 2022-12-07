import { Link } from "react-router-dom";
import { actions } from "../state/reducer";

const Home = ({ allUsers, dispatch }) => {
  const deleteUser = async (_id) => {
    try {
      const res = await fetch(`http://localhost:200/deleteUser/${_id}`, {
        method: "delete",
      });
      const data = await res.json();
      if (data.result === "ok") {
        let newUsers = allUsers.filter((user) => user._id !== _id);
        dispatch({ type: actions.SET_ALL_USER, payload: newUsers });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5 home">
      <div className="my-container">
        {allUsers.map((user) => {
          return (
            <div key={user._id} className="card shadow">
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
                <h4 className="card-title text-success">
                  {user.firstname} {user.lastname}
                </h4>
                <p className="card-text">{`Hi I am ${user.firstname}, ${user.age} years old, and I'm a ${user.job}`}</p>
                <Link
                  to="/viewUser"
                  className="btn btn-success me-2"
                  onClick={() =>
                    dispatch({ type: actions.SET_USER, payload: user })
                  }
                >
                  See Profile
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
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
