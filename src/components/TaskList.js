import TaskShow from "./TasksShow";
import React from "react";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
