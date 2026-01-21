import React, {useEffect, useState} from 'react';

const TaskForm = ({tasks, setTasks}) => {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;

    const newTask = {
        userId: 1,
        id: tasks.length + 1000,
        title: newTaskTitle,
        completed: false
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
        .then(res => res.json())
        .then(() => {
            setTasks(prev => [newTask, ...prev]);
            setNewTaskTitle("");
        })
        .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                value={newTaskTitle}
                onChange={e => setNewTaskTitle(e.target.value)}
                style={{ padding: "8px", width: "250px", marginRight: "10px" }}
            />
            <button type="submit" style={{ padding: "8px 12px" }}>Añadir</button>
        </form>
    );
};
export default TaskForm;