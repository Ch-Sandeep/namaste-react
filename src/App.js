import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestuarantMenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

// We generally don't use below logic to create React elements. Instead, we use JSX
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!",
// );

// JSX Heading (React Element)
// const heading = <h1 id="heading">Heading using JSX!</h1>;

//Title Component
// const Title = () => (
//   <h1 className="title" tabIndex="1">
//     Heading using JSX!
//   </h1>
// );

// //Title element
// const title = (
//   <h1 className="title" tabIndex="1">
//     Title element!
//   </h1>
// );
// const HeadingComponent = () => {
//   return <h1 id="heading">Hello from heading component!</h1>
// }

//component composition - composing components inside another component
// const HeadingComponent = () => (
//   <div id="container">
//     {/* <Title /> */}
//     {title}
//     <h1 id="heading">Hello from heading functional component!</h1>
//   </div>
// );

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Assume auth API return below response
    const userInfo = {
      name: "Sandeep",
    };

    setUserName(userInfo.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Akshay" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// way to render a React element to the DOM
// root.render(heading);

//way to render a React component to the DOM
root.render(<RouterProvider router={appRouter} />);
