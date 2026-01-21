import './App.css'
import React, {useEffect, useState} from "react";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";
import TaskForm from "./components/TaskForm.jsx";
function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

   return(
       <>
       <TaskForm  tasks={tasks} setTasks={setTasks} />

       <TaskList tasks={tasks} />
       </>
   )
}
export default App
