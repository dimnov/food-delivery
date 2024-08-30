import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AddItem from "./pages/AddItem/AddItem";
import ItemsList from "./pages/ItemsList/ItemsList";
import Orders from "./pages/Orders/Orders";
import NotFound from "./pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "items/add",
        element: <AddItem />,
      },
      {
        path: "items",
        element: <ItemsList />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router}></RouterProvider>;
}
