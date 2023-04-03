import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import All from "./components/container/All/All.jsx";
import "./App.css";

function App() {
  const [task, setTask] = React.useState([
    {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "Go for Shopping",
      key: Date.now() + "" + Math.floor(Math.random() * 78),
      isDone: false,
      isCheck:false,
      index: 1,
    },
    {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "Do Assignment",
      key: Date.now() + "" + Math.floor(Math.random() * 78),
      isDone: false,
      isCheck:false,
      index: 2,
    },
  ]);

  const [checkClass, setCheckClass] = React.useState(false);
  const [checked, setChecked] = React.useState([]);


  function addTask(item) {
    const tempTask = [...task];
    tempTask.push({
      id: item.id,
      text: item.text,
      key: item.key,
      isDone: item.isDone,
      isCheck:item.isCheck,
    });
    setTask(tempTask);
  }

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  function deleteTask(id) {
    const tempTask = [...task];
    const index = tempTask.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempTask.splice(index, 1);
    setTask(tempTask);
  }

  function toggleClass() {  
    setCheckClass(prevClass => !prevClass)
  }

  return (
    <div className="App">
      <Router className="App_Router">
        <h1 className="App_Title">My ToDo List</h1>
        <nav className="App_Nav">
          <Link to="/all" className="App_Nav_Link">
            All
          </Link>
        </nav>
        <Routes>
          <Route
            path="/all"
            element={
              <All
                isDone={task.isDone}
                task={task}
                addTask={addTask}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
                checkClass={checkClass}
                toggleClass={toggleClass}
              />
            }
          ></Route>
        </Routes>
        <footer className="footer">
          <p>
            Crated by{" "}
            <a
              href="https://github.com/Ammar-Abid92"
              target="_blank"
              rel="noreferrer"
            >
              Muhammad Ammar Abid
            </a>
          </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
