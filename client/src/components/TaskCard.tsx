import { useNavigate } from "react-router-dom";

interface Task {
  id: string,
  title: string;
  description: string;
  status: string;
  due_date: string;
  created_at: string;
}

export const TaskCard = ({ obj, flag }: { obj: Task, flag: boolean }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => {
      navigate(`/view?id=${obj.id}`);
    }} className="max-w-md mx-auto my-4 p-6 cursor-pointer bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{obj.title}</h2>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${obj.status === 'completed'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
            }`}
        >
          {obj.status.charAt(0).toUpperCase() + obj.status.slice(1)}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{obj.description}</p>
      {flag && <div className="text-sm text-gray-500">
        <p>
          <span className="font-semibold">Due:</span>{' '}
          {new Date(obj.due_date).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Created:</span>{' '}
          {new Date(obj.created_at).toLocaleDateString()}
        </p>
      </div>}
    </div>
  );
};
