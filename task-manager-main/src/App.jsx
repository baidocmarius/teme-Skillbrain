import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <TaskViewer />
        </div>
      </div>
    </>
  );
}

export default App;
