import { useState } from "react";

export const AddTask = ({taskList, setTaskList}) => {

    const handleSubmit = (e) => {
        return 
    }
    return (
        <section className="addTask">
            <form>
                <input type="text" placeholder="Task Title" name="task" autoComplete="off" maxLength='25'/>
                <button type="submit" onSubmit={handleSubmit}>Add Task</button>
            </form>
        </section>

    )
}