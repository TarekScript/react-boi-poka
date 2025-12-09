import { createBrowserRouter } from "react-router";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Hoom from "../Pages/Home/Hoom";
import ReadList from "../Pages/ReadList/ReadList";
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
            },
            {
                loader: () => fetch('booksData.json'),
                path: '/bookDetails/:id',
                Component: BookDetails,
            },
            {
                path: '/readlist',
                Component: ReadList
            }
        ]
    },
]);