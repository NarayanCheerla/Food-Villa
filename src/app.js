import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "react-loading-skeleton/dist/skeleton.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Restaurantmenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
import CardSkeleton from "./Components/CardSkeleton";
// import Instamart from "./Components/Instamart";

const Instamart = lazy(() => import("./Components/Instamart"));
const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<CardSkeleton />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <Restaurantmenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<CardSkeleton />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
