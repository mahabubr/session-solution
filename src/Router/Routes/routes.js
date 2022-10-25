import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main'
import Courses from "../../Pages/Components/Courses/Courses";
import Login from "../../Pages/Components/Login/Login";
import Register from "../../Pages/Components/Register/Register";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: <Main />,
        children: [
            {
                path: '/',
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
                path: '/terms-and-condition',
                element: <TermsAndCondition />
            }
        ]
    }
])

export default router