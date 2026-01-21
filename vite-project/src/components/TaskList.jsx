import React, {useEffect, useState} from 'react';
import TaskItem from "./TaskItem.jsx";
const TaskList = ({tasks, setTasks}) => {

    return (
    <ul>
        {tasks.slice(0,10).map((task) => (
            <TaskItem task={task} key={task.id} />
        ))}
    </ul>
    )
}
export default TaskList;