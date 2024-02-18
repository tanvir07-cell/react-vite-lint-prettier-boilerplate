import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="mx-2 bg-red-500 px-3">
      <h1>This is the app</h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
