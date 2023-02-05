import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;

  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
