import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "@ant-design/v5-patch-for-react-19";
import BookManage from "./pages/book-manage";
import Login from "./pages/login";
import Register from "./pages/register";

const router = createBrowserRouter([
  { path: "/", element: <BookManage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
])

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)