import App from "@/App";
import { AuthorizedCheck } from "@/components";
import { About, Certificates, Dashboard, ErrorPage, Feedbacks, Home, MentorDetails, Mentors, Profile, Sessions, SignIn, SignUp, Statistics } from "@/pages";
import Reviews from "@/pages/private/mentor/Reviews";
import { pathAbout, pathCertificates, pathDashboard, pathFeedbacks, pathHome, pathMentorDetails, pathMentors, pathProfile, pathReviews, pathSessions, pathSignIn, pathSignUp, pathStatistics } from "@/utils";
import { createBrowserRouter, Navigate } from "react-router";

export const routes = createBrowserRouter([
    {
        path: pathHome,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path:pathSignIn,
                element: <SignIn/>
            },
            {
                path:pathSignUp,
                element: <SignUp/>
            },
            {
                path:pathAbout,
                element: <About/>
            },
            {
                path:pathMentors,
                element: <Mentors/>
            },
            {
                path:pathMentorDetails + "/:id",
                element: <MentorDetails/>
            },
            {
                path:pathDashboard,
                element: <Dashboard/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to={pathProfile} replace/>
                    },
                    {
                        path: pathProfile,
                        element: <AuthorizedCheck common><Profile/></AuthorizedCheck>
                    },
                    {
                        path: pathSessions,
                        element: <AuthorizedCheck common><Sessions/></AuthorizedCheck>
                    },
                    {
                        path: pathStatistics,
                        element: <AuthorizedCheck role="mentee"><Statistics/></AuthorizedCheck>
                    },
                    {
                        path: pathCertificates,
                        element: <AuthorizedCheck role="mentee"><Certificates/></AuthorizedCheck>
                    },
                    {
                        path: pathReviews,
                        element: <AuthorizedCheck role="mentor"><Reviews/></AuthorizedCheck>
                    },
                    {
                        path: pathFeedbacks,
                        element: <AuthorizedCheck role="mentor"><Feedbacks/></AuthorizedCheck>
                    }
                ]
            },
        ]
    }
])