import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Hoom from "../Pages/Home/Hoom";
import Roots from "../Pages/Roots.jsx/Roots";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Hoom,
            }
        ]
    },
]);