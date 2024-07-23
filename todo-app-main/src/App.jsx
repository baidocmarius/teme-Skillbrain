import React, { useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Input from "./components/input/Input";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description: "1Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "2Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "3Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "4Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodo.id ? { ...todo, ...formData } : todo
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
    } else {
      const newTodo = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setFormData({ title: "", description: "" });
    setIsModalOpen(false);
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setFormData({ title: todo.title, description: todo.description });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleMoveToCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const handleMoveToToDo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: false } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <h2>Create Todo</h2>
          <Button onClick={() => setIsModalOpen(true)}>Add +</Button>
        </Card>

        <Card>
          <h1>My todos</h1>
          <div className="list-container">
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onEdit={() => handleEdit(todo)}
                  onDelete={() => handleDelete(todo.id)}
                  onMoveToCompleted={() => handleMoveToCompleted(todo.id)}
                  onMoveToToDo={() => handleMoveToToDo(todo.id)}
                />
              ))}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onEdit={() => handleEdit(todo)}
                  onDelete={() => handleDelete(todo.id)}
                  onMoveToCompleted={() => handleMoveToCompleted(todo.id)}
                  onMoveToToDo={() => handleMoveToToDo(todo.id)}
                />
              ))}
          </div>
        </Card>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>{editingTodo ? "Edit Todo" : "Create Todo"}</h2>
        <form onSubmit={handleSubmit}>
          <Input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Title"
            type="text"
          />
          <TextArea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Description"
          />
          <Button type="submit">{editingTodo ? "Update" : "Create"}</Button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
