export const ShowTask = ( {taskList, setTaskList}) => {
    const task = [
        {   
            id: 1,
            name: 'Task A',
            time: '2:00:00 AM 9/9/2023'
            
        },
        {
            id: 2,
            name: 'Task B',
            time: '3:00:00 AM 9/10/2023'
        },
        {
            id: 3,
            name: 'Task C',
            time: '4:00:00 AM 9/11/2023'
        }
    ];
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll">
                    Clear All
                </button>
            </div>
            <ul>
               {
                taskList.map((t) => {
                    return (
                        <li key={t.id}> 
                            <p>
                                <span className="name">{t.name}</span>
                                <span className="time">{t.time}</span>
                            </p>
                            </li>
                    )
                })
               }
            </ul>
        
        </section>
    )

}
