import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-xl font-semibold">Welcome to the Home Page</h1>

      <button
        onClick={() => navigate("/products")}
        className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
        Go to Products Page
      </button>
    </div>
  );
}
