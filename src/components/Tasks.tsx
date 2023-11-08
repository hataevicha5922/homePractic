import {FC} from "react";
import {TaskType} from "../App";
import {Task} from "./Task";


type TasksPropsTypes = {
    title: string,
    tasks: Array<TaskType>,
    students: Array<string>
}
export const Tasks: FC<TasksPropsTypes> = ({title, tasks, students}) => {
    return (
        <>
        <h2>{title}</h2>
            <ul>
                {tasks.map(task => <Task taskId={task.taskId} title={task.title} isDone={task.isDone}/>
                    )}
            </ul>
        </>
    )
}

