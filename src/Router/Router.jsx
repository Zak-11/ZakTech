import {createBrowserRouter} from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { About} from "../Pages/About/About";
import { OurWork } from "../Pages/OurWork/OurWork";
import { Services } from "../Pages/Services/Services";
import { Contact } from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound"
import { LayoutPublic } from "../layout/LayoutPublic";



export const router = createBrowserRouter([

{
path: '/',
element:<LayoutPublic />,
errorElement: <NotFound />,
children: [
{
      path: "/",
      element:<HomePage />,
     
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/ourWorks",
      element: <OurWork />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },

]

},


    
  ]);