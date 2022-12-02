import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [profPhoto, setProfPhoto] = useState();
  const nameInput = useRef(null);
  const ageInput = useRef(null);
  const jobInput = useRef(null);

  const onChange = (event) => {
    // setProfPic(URL.createObjectURL(event.target.files[0]));
    // console.log(URL.createObjectURL(event.target.files[0]));
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const upload_img = reader.result;
      setProfPhoto(upload_img);
    });

    reader.readAsDataURL(event.target.files[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        profilePicture: profPhoto,
        name: nameInput.current.value,
        age: ageInput.current.value,
        job: jobInput.current.value,
      },
    ]);

    nameInput.current.value = "";
    ageInput.current.value = "";
    jobInput.current.value = "";
  };

  console.log("page fired");
  return (
    <div className="App">
      <form onSubmit={onSubmit} className="col-4 m-auto mt-5">
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            ref={nameInput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="age"
            placeholder="Age"
            ref={ageInput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="job"
            placeholder="Job"
            ref={jobInput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="profPhoto"
            id="picture"
            onChange={onChange}
            className="form-control"
          />
        </div>
        <br />
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
      <br />
      <div className="row">
        {todos.map((i) => (
          <div
            key={i.id}
            className="card mb-5 col-3"
            style={{ width: "18rem" }}
          >
            <img src={i.profilePicture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{i.name}</h5>
              <p className="card-text">
                Hi I am {i.name}, {i.age} and i work as {i.job}
              </p>
              <button className="btn btn-primary">View my profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
