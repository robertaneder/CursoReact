import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import { Info } from "./pages/Info";

const routesConfig = createBrowserRouter ([{
    path: "/", 
    element: <Layout/>,
    children:[
        {
            path: "/", 
            element: <Home/>
        },
        {
            path: "/info",
            element: <Info/>
        }
    ]
},
{
    path: "/home", 
    element: <Home/>  
}
]);

export default routesConfig;

