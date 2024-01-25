import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Tasks/Tasks";
import TaskController from "./context/TaskController";

const App = () => {
  return (
    <>
      <Header />
      <TaskController>
        <Main />
      </TaskController>

      <Footer />
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
