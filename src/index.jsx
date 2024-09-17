import { useEffect, useState } from "react";
import User from "./user";
import './styles.css';

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("SharanKarchella");
  const [userData, setUserData] = useState(null);

  function handleSubmit(){
    fetchUserData()
  }

  async function fetchUserData() {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const res = await response.json();
    if (res) {
      setUserData(res);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchUserData();
  }, ["res"]);

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-userName"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

// async function fetchUserData() {
//     const resp = await fetch(`https://api.github.com/users/${username}`);

//     const data = resp.json();
//     console.log(data);
//   }

