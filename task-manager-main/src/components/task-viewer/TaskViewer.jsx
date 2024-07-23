import './TaskViewer.css';
import TaskCard from '../task-card/TaskCard';

const TaskViewer = () => {

  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "2 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-3",
      name: "3 Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2022, 6, 13),
    },
    {
      id: "T-4",
      name: "4 Create a Design System for Enum Workspace.",
      status: "Done",
      dueDate: new Date(2022, 6, 15),
    },
    {
      id: "T-5",
      name: "5 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 8, 13),
    },
    {
      id: "T-6",
      name: "6 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 7, 14),
    },
    {
      id: "T-7",
      name: "7 Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2022, 7, 20),
    },
  ];

  return (
    <>
    <div className='task-viewer-container'>
      <h1 className='task-viewer-title'> Task Manager </h1>
      <div className='task-viewer-content'>
        {data.map((element) => (
        <TaskCard key={element.name} id={element.id} name={element.name} status={element.status} date={element.dueDate}/>
        ))}
      </div>
    </div>
    </>
  )
};

export default TaskViewer;