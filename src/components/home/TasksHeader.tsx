import { Link, useAsyncValue } from "react-router-dom";
import { TTasks } from "../../types/apis/tasks";
import { routesPath } from "../../routes/path";

const TasksHeader = () => {
    const tasks = useAsyncValue() as TTasks

    return (
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-gray-600 text-lg capitalize">This is some tasks that you should do it</h1>
            <Link to={routesPath.CreateTask} className="bg-blue-900 text-white text-sm py-2 px-5 rounded hover:bg-blue-600 transition relative">
                <div className="h-8 w-8 rounded-full bg-red-500 flex justify-center items-center absolute -top-4 -right-3">{tasks.length}</div>
                Create New Task
            </Link>
        </div>
    )
}


export default TasksHeader;