import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Search } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
