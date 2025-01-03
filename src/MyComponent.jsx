import { useState } from "react";

export default function MyComPonent() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks((tasks) => [...tasks, newTasks]);
      setNewTasks("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const element = tasks[index];
      tasks[index] = tasks[index - 1];
      tasks[index - 1] = element;
      setTasks([...tasks]);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const element = tasks[index];
      tasks[index] = tasks[index + 1];
      tasks[index + 1] = element;
      setTasks([...tasks]);
    }
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen p-8 text-white bg-gray-900">
      <h1 className="mb-4 text-3xl font-semibold">To-Do-List</h1>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter a task..."
          onChange={(event) => handleInputChange(event)}
          value={newTasks}
          className="p-4 mb-2 text-gray-900 bg-white rounded h-7 w-72"
        />
        <button
          onClick={addTask}
          className="w-20 p-1 ml-2 bg-green-600 rounded hover:text-gray-300 hover:bg-green-700"
        >
          Add
        </button>
      </div>

      <ul className="flex flex-col">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between m-1 text-gray-900 bg-white w-[30rem] rounded-md h-10 overflow-hidden"
          >
            <div className="flex flex-[2] items-center justify-center px-2 py-1  text-gray-900">
              {task}
            </div>
            <div className="flex items-center justify-center flex-1 bg-green-500">
              <button
                onClick={() => deleteTask(index)}
                className="content-center px-2 py-1 mr-2 text-white bg-red-500 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => moveTaskUp(index)}
                className="flex items-center text-2xl align-middle "
              >
                ⬆
              </button>
              <button className="text-2xl" onClick={() => moveTaskDown(index)}>
                ⬇️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
