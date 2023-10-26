import { httpService } from "../../lib";
import { TTasks } from "../../types/apis/tasks";

export const fetchTasks = () => httpService.get<unknown, TTasks>('/tasks')