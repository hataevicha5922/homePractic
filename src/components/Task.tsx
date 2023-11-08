import {FC} from "react";
import {TaskType} from "../App";

export const Task: FC<TaskType> = ({taskId, title, isDone}) => {
    return (
            <li key={taskId} >{title}</li>
    )
}