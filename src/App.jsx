import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Search, SearchResult } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/search-result",
    element: <SearchResult />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
