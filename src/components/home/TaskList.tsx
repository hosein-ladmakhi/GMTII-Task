import { Link, useAsyncValue } from "react-router-dom";
import { TTasks } from "../../types/apis/tasks";
import React from "react";

const TasksList = () => {
    const tasks = useAsyncValue() as TTasks
    return (
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {React.Children.toArray(tasks.map(task => (
                <li className="border-2 border-gray-100 shadow-lg p-5 rounded-lg">
                    <h1 className="overflow-hidden text-ellipsis line-clamp-1 font-bold capitalize text-base">{task.title}</h1>
                    <p className="overflow-hidden text-ellipsis line-clamp-3 text-sm text-gray-600">{task.description}</p>
                    <Link to={`/tasks/${task.id}`} className="bg-blue-900 text-white text-sm py-2 px-5 rounded hover:bg-blue-600 transition mt-5 inline-block ml-auto">Show More</Link>
                </li>
            )))}
        </ul>
    )
}

export default TasksList;