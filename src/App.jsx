import { RouterProvider } from "react-router-dom";
import { router } from "../src/utils/RouterProvider.jsx";

import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
