export const ShowTask = ({ taskList, setTaskList, setTask }) => {
  const handleClearAll = () => {
    setTaskList([]);
  };

  const handleDeleteTask = (id) => {
    const updatedTaskList = taskList.filter((t) => t.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleEditTask = (id) => {
    const taskToEdit = taskList.find((t) => t.id === id);
    setTask(taskToEdit);
  };

  return (
    <section className="showTask" style={{margin:"20px"}}>
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={handleClearAll}>
          Clear All
        </button>
      </div>

      <ul>
        {taskList.length === 0 ? (
          <p style={{ textAlign: "center", color: "#737373" }}>No tasks yet!</p>
        ) : (
          taskList.map((t) => (
            <li key={t.id}>
              <p>
                <span className="name">{t.name}</span>
                <span className="time">{t.time}</span>
              </p>

              {/* edit and delete icons */}
              <i
                className="bi bi-pencil-square"
                title="Edit Task"
                onClick={() => handleEditTask(t.id)}
              />
              <i
                className="bi bi-trash"
                title="Delete Task"
                onClick={() => handleDeleteTask(t.id)}
              />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};
