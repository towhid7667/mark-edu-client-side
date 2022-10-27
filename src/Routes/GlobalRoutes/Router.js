import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Categories/Categories";
import CategoryCourse from "../../Pages/Categories/CategoryCourse";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Log in/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from './../PrivateRouter/PrivateRoute';
import Blog from './../../Pages/Blog/Blog';


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
                path : '/home',
                element: <Home></Home>
            },
            {
                path : '/courses',
                loader: async()=> {
                    return fetch('https://mark-edu-server-side.vercel.app/courses')
                },
                element : <Courses></Courses>
                
            },
            {
                path : '/courses',
                loader: async()=> {
                    return fetch('https://mark-edu-server-side.vercel.app/courses')
                },
                element : <Courses></Courses>
                
            },
            {
                path : '/courses/:id',
                loader: async({params})=> {
                    return fetch(`https://mark-edu-server-side.vercel.app/courses/${params.id}`)
                },
                element : <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
                
            },
            {
                path : '/category',
                element : <Categories/>
                
            },
            
            {
                path : '/category/:id',
                loader: async({params})=> {
                    return fetch(`https://mark-edu-server-side.vercel.app/category/${params.id}`)
                },
                element : <CategoryCourse></CategoryCourse>
                
            },
            
            {
                path : '/login',
                element : <Login></Login>
                
            },
            
            {
                path : '/register',
                element : <Register></Register>
                
            },
            
            {
                path : '/blogs',
                element : <Blog></Blog>
                
            },
            

        ]
    }
])