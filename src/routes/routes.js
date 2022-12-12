import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path : '/',
        errorElement : <ErrorPage/>,
        element : <App />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/blog',
                element : <Blog />
            },
            {
                path : '/details/:id',
                element : <Details />
            }
        ]
    }
]) 