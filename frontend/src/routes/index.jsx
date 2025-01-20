import App from "@/App";
import { AuthorizedCheck } from "@/components";
import { About, Dashboard, ErrorPage, Home, Profile, SignIn, SignUp, Statistics } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/sign-in",
                element: <SignIn/>
            },
            {
                path:"/sign-up",
                element: <SignUp/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/dashboard",
                element: <Dashboard/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/dashboard/profile" replace/>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <AuthorizedCheck common><Profile/></AuthorizedCheck>
                    },
                    {
                        path: "/dashboard/statistics",
                        element: <AuthorizedCheck role="mentee"><Statistics/></AuthorizedCheck>
                    }
                ]
            },
        ]
    }
])