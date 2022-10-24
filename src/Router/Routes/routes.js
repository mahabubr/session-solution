import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main'
import Login from "../../Pages/Components/Login/Login";
import Register from "../../Pages/Components/Register/Register";
import NotFound from "../../Pages/Others/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: <Main />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router