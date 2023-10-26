import { lazy } from "react";

const HomePage = lazy(() => import('./Home'));
const TaskDetailPage = lazy(() => import('./Task'));
const ModifyTaskPage = lazy(() => import('./ModifyTask'));

export { HomePage, TaskDetailPage, ModifyTaskPage }

