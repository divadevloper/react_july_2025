import { useState } from "react";

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [allUser, setallUser] = useState([]);
  const [editindex, seteditindex] = useState("");

  const register = (e) => {
    e.preventDefault();

    let userobj = {
      username,
      password,
    };
    console.log(userobj);
    setallUser([...allUser, userobj]);
  };

  const deleteone = (index) => {
    const newUser = [...allUser];
    newUser.splice(index, 1);
    setallUser(newUser);
  };
  const editOne = (index) => {
    console.log(index);
    const user = allUser[index];
    seteditindex(index);
    console.log(user);
    setusername(user.username);
    setpassword(user.password);
  };
  const savedate = () => {
    let updateUser = {
      username,
      password,
    };
    console.log(updateUser);
    const newUser = [...allUser];
    newUser[editindex] = updateUser;

    setallUser(newUser);
  };

  //   console.log(username);
  //   console.log(password);

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center">Register</h1>
        <div className="mx-auto px-50 py-40  w-50">
          <div className="">
            <label htmlFor="">firstname</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="lastname"> lastname</label>
            <input
              type="text"
              id="lastname"
              // className="form-control"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button onClick={register} className="btn btn-primary ">
            Submit
          </button>
        </div>

        <div>
          {allUser.length == 0 ? (
            <p>Loading .....</p>
          ) : (
            allUser.map((item, i) => (
              <div key={i}>
                <li>{item.username}</li>
                <li>{item.password}</li>
                <div>
                  <button onClick={() => deleteone(i)}>Delete</button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => editOne(i)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  name=""
                  id=""
                  onChange={(e) => setusername(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mt-4"
                  name=""
                  id=""
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={savedate}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
