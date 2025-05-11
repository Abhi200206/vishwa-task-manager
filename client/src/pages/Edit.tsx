import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Edit = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [todo, setTodo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});
  const id = params.get("id");

  const getTodo = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/tasks/${id}`);
      setTodo(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Error fetching task details");
      navigate('/')
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleChange = (field: string, value: string) => {
    setTodo((prev: any) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors: { title?: string; description?: string } = {};
    if (!todo.title || todo.title.trim() === "") newErrors.title = "Title is required";
    if (!todo.description || todo.description.trim() === "") newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      await axios.put(`http://localhost:8080/tasks/${id}`, {
        title: todo.title,
        description: todo.description,
        status: todo.status,
      });
      setLoading(false);
      alert("Task updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to update task");
      navigate('/')
    }
  };

  if (loading) return <div className="text-center p-4"><Loading /></div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={todo.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={todo.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={todo.status || ""}
          onChange={(e) => handleChange("status", e.target.value)}
          className="w-full border rounded px-3 py-2 cursor-pointer"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        <p>Created At: {new Date(todo.created_at).toLocaleString()}</p>
        <p>Due Date: {new Date(todo.due_date).toLocaleDateString()}</p>
      </div>

      <div
        onClick={handleUpdate}
        className="bg-blue-600 cursor-pointer text-center font-sans text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update Task
      </div>
    </div>
  );
};
