import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { TaskCard } from "../components/TaskCard";
import { Loading } from "../components/Loading";

export const View = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const [todo, setTodo] = useState<any>({});
    const [loading, setLoading] = useState<Boolean>(true);
    const id = params.get("id");
    const getTodo = async () => {
        try {
            let res = await axios.get(`http://localhost:8080/tasks/${id}`);
            console.log(res.data);
            setTodo(res.data);
            setLoading(false);
        }
        catch (err) {
            console.error(err);
            alert("Error at fetching details");
        }
    }
    const Del = async () => {
        try {
            let val = confirm("Are you sure that you wanted to delete ?");
            if (val) {
                setLoading(true);
                await axios.delete(`http://localhost:8080/tasks/${id}`);
                setLoading(false);
                alert("Todo Deleted Successfully");
                navigate('/');
            }
        }
        catch (err) {
            console.error("error" + err);
            alert("Error deleting the Todo");
        }
    }
    useEffect(() => {
        getTodo();
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
            <div className="m-4 flex justify-between">
                <div>
                    <div onClick={() => {
                        navigate(`/`);
                    }} className="bg-blue-500 hover:bg-blue-600 text-white py-1 rounded border-[1px] cursor-pointer px-8">
                        <p>Home</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div onClick={() => {
                        navigate(`/edit?id=${id}`);
                    }} className="bg-green-500 hover:bg-green-600 text-white rounded py-1 border-[1px] cursor-pointer px-8">
                        <p>Edit</p>
                    </div>
                    <div onClick={() => {
                        Del();
                    }} className="bg-red-500 hover:bg-red-600 text-white rounded py-1 border-[1px] cursor-pointer px-8">
                        <p>Delete</p>
                    </div>
                </div>
            </div>
            <TaskCard flag={true} obj={todo} />
        </div>
    )
}