import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Root } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <h2>About</h2>,
  },
  {
    path: "/contact",
    element: <h2>Contact</h2>,
  },
  {
    path: "*",
    element: <h2>Not Found</h2>,
  },
]);

import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
//....dgwea
