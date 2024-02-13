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
const router = createBrowserRouter([
    {
        //main path
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/postJob", element: <CreateJob /> }
        ]
    },
]);

export default router
