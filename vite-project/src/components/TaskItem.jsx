import React, {useEffect, useState} from 'react';

const TaskItem = ({ task}) => {
    return(
        <li>
            <h4>{task.title}</h4>
            <p>Completada: {task.completed ? "Sí" : "No"}</p>
        </li>
    )
}
export default TaskItem;