import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Create = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<Boolean>(false);
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        status: "pending",
        due_date: "",
    });
    const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

    const handleChange = (field: string, value: string) => {
        setTodo((prev) => ({ ...prev, [field]: value }));
    };

    const validate = () => {
        const newErrors: { title?: string; description?: string } = {};
        if (!todo.title.trim()) newErrors.title = "Title is required";
        if (!todo.description.trim()) newErrors.description = "Description is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCreate = async () => {
        if (!validate()) return;

        try {
            setLoading(true);
            const formattedDueDate = todo.due_date
                ? new Date(todo.due_date).toISOString()
                : null;

            await axios.post("http://localhost:8080/tasks/", {
                title: todo.title,
                description: todo.description,
                status: todo.status,
                due_date: formattedDueDate,
            });
            setLoading(false);
            alert("Task created successfully!");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Failed to create task");
        }
    };

    if (loading) return <div className="text-center p-4"><Loading /></div>;
    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Create Task</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                    type="text"
                    value={todo.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    value={todo.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                    value={todo.status}
                    onChange={(e) => handleChange("status", e.target.value)}
                    className="w-full border rounded px-3 py-2 cursor-pointer"
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Due Date</label>
                <input
                    type="date"
                    value={todo.due_date}
                    onChange={(e) => handleChange("due_date", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div
                onClick={handleCreate}
                className="bg-green-600 cursor-pointer text-center font-sans text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Create Task
            </div>
        </div>
    );
};
