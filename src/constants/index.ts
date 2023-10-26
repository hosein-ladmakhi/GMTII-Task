import { routesPath } from "../routes/path";
import { TNavbars } from "../types/models";

export const navbarItems: TNavbars = [
    {
        text: 'Home',
        path: routesPath.Home
    },
    {
        text: 'Create New Task',
        path: routesPath.CreateTask
    },
]