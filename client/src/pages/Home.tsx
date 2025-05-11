import axios from "axios";
import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Home = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState<any>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const call = async () => {
        try {
            let res = await axios.get("http://localhost:8080/tasks/");
            setTodos(res.data);
            setLoading(false);
        }
        catch (err) {
            console.error(err);
            alert("Error at server");
        }
    }
    useEffect(() => {
        call();
    }, []);
    if (loading) {
        return (
            <div >
                <div>
                    <Loading />
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-between mb-12 m-4 ">
                <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400">
                    <p>Task Manager</p>
                </div>
                <div className="bg-green-500 hover:bg-green-600 text-white rounded py-1 border-[1px] cursor-pointer px-8" onClick={() => {
                    navigate('/create');
                }}>
                    <p>Create</p>
                </div>
            </div>
            {todos.map((todo: any) => {
                return <TaskCard flag={false} key={todo.id} obj={todo} />
            })}
        </div>
    )
}