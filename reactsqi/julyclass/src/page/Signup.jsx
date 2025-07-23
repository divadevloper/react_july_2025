import { useState } from "react";

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [allUser, setallUser] = useState([]);

  const register = () => {
    let userobj = {
      username,
      password,
    };
    console.log(userobj);
    setallUser([...allUser, userobj]);
  };

  //   console.log(username);
  //   console.log(password);

  return (
    <div>
      <h1 className="text-center">Register</h1>
      <div action="" className="mx-auto px-50 py-40  w-50">
        <div className="form-control">
          <label htmlFor="">firstname</label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>

        <input type="text" onChange={(e) => setpassword(e.target.value)} />
        <div className="flex justify-center mt-4">
          <button onClick={register} className="border-0 bg-danger h-50 w-50 ">
            Submit
          </button>
        </div>
      </div>

      <div>
        {allUser.map((item) => (
          <div>
            <li>{item.username}</li>
            <li>{item.password}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signup;
