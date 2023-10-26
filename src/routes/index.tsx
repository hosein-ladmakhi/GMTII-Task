import { createBrowserRouter } from "react-router-dom"
import { routesPath } from "./path"
import { HomePage, ModifyTaskPage, TaskDetailPage } from "../pages"
import { AppLayout } from "../layouts"
import { fetchTasksLoader } from "../pages/Home"
import { createOrEditTaskAction } from "../pages/ModifyTask"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: routesPath.Home,
                element: <HomePage />,
                index: true,
                loader: fetchTasksLoader
            },
            {
                path: routesPath.Task,
                element: <TaskDetailPage />,
            },
            {
                path: routesPath.CreateTask,
                element: <ModifyTaskPage />,
                action: createOrEditTaskAction
            },
            {
                path: routesPath.EditTask,
                element: <ModifyTaskPage />,
                action: createOrEditTaskAction
            },
        ]
    }

])