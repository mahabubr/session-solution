import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main'
import NotFound from "../../Pages/Others/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: <Main />
    }
])

export default router