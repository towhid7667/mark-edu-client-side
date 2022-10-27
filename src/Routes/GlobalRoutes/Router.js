import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Courses from "../../Pages/Courses/Courses";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path : '/',
                element: <Home></Home>
            },
            {
                path : '/courses',
                loader: async()=> {
                    return fetch('https://mark-edu-server-side.vercel.app/courses')
                },
                element : <Courses></Courses>
                
            },
            // {
            //     path : '/categories',
            //     loader: async()=> {
            //         return fetch('https://mark-edu-server-side.vercel.app/course-categories')
            //     },
            //     element : <Categories></Categories>
                
            // }
        ]
    }
])