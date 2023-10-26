import React from "react";
import { Link } from "react-router-dom";

const task = {
    id: 1,
    title: 'learn english and do assignment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isCompleted: false
}

const tasks = [
    {
        id: 1,
        title: 'learn english and do assignment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Go to gym and do some practice',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isCompleted: false
    },
    {
        id: 3,
        title: 'go to work and done all your company session',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isCompleted: false
    },
    {
        id: 4,
        title: 'go to shower and change your clothes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isCompleted: false
    },
    {
        id: 5,
        title: 'play piano',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isCompleted: true
    },
]

function Task() {
    return (
        <>
            <div>
                <div className="mb-5 flex justify-between items-center">
                    <div>
                        <h1 className="text-lg capitalize font-bold">{task.title}</h1>
                        <p className={`text-xs ${task.isCompleted ? 'text-green-600' : 'text-red-600'}`}>{task.isCompleted ? 'You Complete This Task Successfully' : 'You Must Complete Your Task'}</p>
                    </div>
                    <div>
                        <button className="bg-red-600 text-white text-sm py-2 px-5 rounded hover:bg-red-700 transition inline-block mr-5">Delete</button>
                        <Link to={`/tasks/edit/${task.id}`} className="bg-blue-600 text-white text-sm py-2 px-5 rounded hover:bg-blue-700 transition inline-block">Update</Link>
                    </div>
                </div>
                <p className="text-sm text-gray-600">{task.description}</p>
            </div>
            <div className="mt-10 shadow-lg p-5 border-2 border-gray-100">
                <h1 className="mb-5 font-bold text-lg">Related Tasks</h1>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {React.Children.toArray(tasks.map(task => (
                        <li className="border-2 border-gray-100 shadow-lg p-5 rounded-lg">
                            <h1 className="overflow-hidden text-ellipsis line-clamp-1 font-bold capitalize text-base">{task.title}</h1>
                            <p className="overflow-hidden text-ellipsis line-clamp-3 text-sm text-gray-600">{task.description}</p>
                            <Link to={`/tasks/${task.id}`} className="bg-blue-900 text-white text-sm py-2 px-5 rounded hover:bg-blue-600 transition mt-5 inline-block ml-auto">Show More</Link>
                        </li>
                    )))}
                </ul>
            </div>
        </>
    )
}

export default Task;