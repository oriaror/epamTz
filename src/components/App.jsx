import { useEffect, useState } from "react";
import User from "./User";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [userArr, setUserArr] = useState([]);
  const [currentUser, setCurrentUSer] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const options = [
    { value: "A-Z", text: "Sort By: A-Z" },
    { value: "Z-A", text: "Sort By: Z-A" },
  ];
  const [select, setSelect] = useState(options[0].value);

  const url =
    "https://randomuser.me/api/1.4/?results=50&nat=gb.us&inc=gender,name,location,email,phone,picture";
  const fetchData = async function (url) {
    const res = await fetch(url);
    const data = await res.json();
    setUserArr(data.results);
    return;
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const sortByAZ = () => {
    setUserArr([
      ...userArr.sort((a, b) => a.name.first[0].localeCompare(b.name.first[0])),
    ]);
    console.log(userArr);
  };

  const sortByZa = () => {
    setUserArr([
      ...userArr.sort((a, b) => b.name.first[0].localeCompare(a.name.first[0])),
    ]);
    console.log(userArr);
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
    if (event.target.value === "A-Z") {
      sortByAZ();
    }
    if (event.target.value === "Z-A") {
      sortByZa();
    }
  };

  return (
    <div className="app">
      <div className="container">
        <span class="select">
          <select
            value={select}
            onChange={handleChange}
            className="usersSorting"
          >
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div className="list">
        {modalShow ? (
          <Modal props={currentUser} setModalShow={() => setModalShow(false)} />
        ) : null}
        {userArr.length !== 0
          ? userArr.map((person) => (
              <User
                props={person}
                key={person.name.first + person.name.last}
                onClick={() => {
                  setCurrentUSer(person);
                  setModalShow(true);
                }}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default App;
