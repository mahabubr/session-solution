import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main'
import CheckOut from "../../Pages/Components/CheckOut/CheckOut";
import CourseDetails from "../../Pages/Components/CourseDetails/CourseDetails";
import Courses from "../../Pages/Components/Courses/Courses";
import Login from "../../Pages/Components/Login/Login";
import Register from "../../Pages/Components/Register/Register";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: <Main />,
        children: [
            {
                path: '/',
                loader: async () => fetch('https://session-solutions-server.vercel.app/category'),
                element: <Courses />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/category/:id',
                element: <CourseDetails />,
                loader: async ({ params }) => fetch(`https://session-solutions-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element:
                    <PrivateRoute>
                        <CheckOut />
                    </PrivateRoute>,
                loader: async ({ params }) => fetch(`https://session-solutions-server.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/terms-and-condition',
                element: <TermsAndCondition />,
            }
        ]
    }
])

export default router