import App from "@/App";
import { AuthorizedCheck } from "@/components";
import { About, Certificates, Dashboard, ErrorPage, Feedbacks, Home, MentorDetails, Mentors, Profile, Sessions, SignIn, SignUp, Statistics } from "@/pages";
import Reviews from "@/pages/private/mentor/Reviews";
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
                path:"/mentors",
                element: <Mentors/>
            },
            {
                path:"/mentor/:id",
                element: <MentorDetails/>
            },
            {
                path:"/dashboard",
                element: <Dashboard/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/dashboard/common/profile" replace/>
                    },
                    {
                        path: "/dashboard/common/profile",
                        element: <AuthorizedCheck common><Profile/></AuthorizedCheck>
                    },
                    {
                        path: "/dashboard/common/sessions",
                        element: <AuthorizedCheck common><Sessions/></AuthorizedCheck>
                    },
                    {
                        path: "/dashboard/mentee/statistics",
                        element: <AuthorizedCheck role="mentee"><Statistics/></AuthorizedCheck>
                    },
                    {
                        path: "/dashboard/mentee/certificates",
                        element: <AuthorizedCheck role="mentee"><Certificates/></AuthorizedCheck>
                    },
                    {
                        path: "/dashboard/mentor/reviews",
                        element: <AuthorizedCheck role="mentor"><Reviews/></AuthorizedCheck>
                    },
                    {
                        path: "/dashboard/mentor/feedbacks",
                        element: <AuthorizedCheck role="mentor"><Feedbacks/></AuthorizedCheck>
                    }
                ]
            },
        ]
    }
])