import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { fetchTasks } from "../services/taskService";
import TasksList from "../components/home/TaskList";
import { TTasks } from "../types/apis/tasks";
import TasksHeader from "../components/home/TasksHeader";

export const fetchTasksLoader = () => {
    const tasks = fetchTasks().then((res) => res.filter(task => task.id));
    return defer({
        tasks
    })
}

function Home() {
    const tasksLoaderData = useLoaderData() as { tasks: TTasks };

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-gray-600 font-bold text-lg">Welcome to home page</h1>
                <p className="text-gray-600">This application is simple task manager that implemented as testing application</p>
            </div>
            <div>
                <Suspense fallback={<p>Loading ...</p>}>
                    <Await resolve={tasksLoaderData.tasks}>
                        <TasksHeader />
                        <TasksList />
                    </Await>
                </Suspense>
            </div>
        </div >
    )
}

export default Home;