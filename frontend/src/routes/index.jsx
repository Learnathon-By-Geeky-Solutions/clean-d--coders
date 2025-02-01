import App from "@/App";
import { AuthorizedCheck } from "@/components";
import {
  About,
  Certificates,
  Dashboard,
  ErrorPage,
  Feedbacks,
  Home,
  MentorDetails,
  Mentors,
  Profile,
  Sessions,
  SignIn,
  SignUp,
  Statistics,
  Users,
} from "@/pages";
import Reviews from "@/pages/private/mentor/Reviews";
import {
  pathAbout,
  pathAdminUsers,
  pathDashboard,
  pathHome,
  pathMenteeCertificates,
  pathMenteeStatistics,
  pathMentorDetails,
  pathMentorFeedbacks,
  pathMentorReviews,
  pathMentors,
  pathProfile,
  pathSessions,
  pathSignIn,
  pathSignUp,
} from "@/utils";
import { createBrowserRouter, Navigate } from "react-router";

export const routes = createBrowserRouter([
  {
    path: pathHome,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: pathSignIn,
        element: <SignIn />,
      },
      {
        path: pathSignUp,
        element: <SignUp />,
      },
      {
        path: pathAbout,
        element: <About />,
      },
      {
        path: pathMentors,
        element: <Mentors />,
      },
      {
        path: pathMentorDetails + "/:id",
        element: <MentorDetails />,
      },
      {
        path: pathDashboard,
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Navigate to={pathProfile} replace />,
          },
          {
            path: pathProfile,
            element: (
              <AuthorizedCheck role={["user", "mentee", "mentor", "admin"]}>
                <Profile />
              </AuthorizedCheck>
            ),
          },
          {
            path: pathSessions,
            element: (
              <AuthorizedCheck role={["user", "mentee", "mentor"]}>
                <Sessions />
              </AuthorizedCheck>
            ),
          },
          {
            path: pathMenteeStatistics,
            element: (
              <AuthorizedCheck role={["mentee"]}>
                <Statistics />
              </AuthorizedCheck>
            ),
          },
          {
            path: pathMenteeCertificates,
            element: (
              <AuthorizedCheck role={["mentee"]}>
                <Certificates />
              </AuthorizedCheck>
            ),
          },
          {
            path: pathMentorReviews,
            element: (
              <AuthorizedCheck role={["mentor"]}>
                <Reviews />
              </AuthorizedCheck>
            ),
          },
          {
            path: pathMentorFeedbacks,
            element: (
              <AuthorizedCheck role={["mentor"]}>
                <Feedbacks />
              </AuthorizedCheck>
            ),
          },
          {
            path: pathAdminUsers,
            element: (
              <AuthorizedCheck role={["admin"]}>
                <Users />
              </AuthorizedCheck>
            ),
          },
        ],
      },
    ],
  },
]);
