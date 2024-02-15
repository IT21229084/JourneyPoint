import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "../index.css";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import CreateJob from "../pages/CreateJob";
import MyJobs from "../pages/MyJobs";
import SalaryPage from "../pages/SalaryPage";
import UpdateJob from "../pages/UpdateJob";
const router = createBrowserRouter([
    {
        //main path
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/postJob",
                element: <CreateJob />
            },
            {
                path: "/myJob",
                element: <MyJobs />
            },
            {
                path: "/salary",
                element: <SalaryPage />
            },
            {
                path: "/editJob/:id",
                element: <UpdateJob />,
                loader:({params}) => fetch("")
            }
        ]
    },
]);

export default router
