export const AddTask = ({ taskList, setTaskList, task, setTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    if (task.id) {
      // Update existing task
      const updatedTaskList = taskList.map((t) =>
        t.id === task.id
          ? { ...t, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
          : t
      );
      setTaskList(updatedTaskList);
    } else {
      // Add new task
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
    }

    // Reset form and task state
    e.target.reset();
    setTask({ id: null, name: "" });
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          placeholder="Task Title"
          name="task"
          autoComplete="off"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update Task" : "Add Task"}</button>
      </form>
    </section>
  );
};
