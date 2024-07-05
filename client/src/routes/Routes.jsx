import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import RoomDetails from "../pages/RoomDetails/RoomDetails.jsx";
import PrivateRoute from './PrivateRoute.jsx';
import { getRoom } from '../api/rooms.js';
import DashboardLayout from '../layouts/DashboardLayout.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/room/:id',
                element: 
                    <PrivateRoute>
                        <RoomDetails/>
                    </PrivateRoute>,
                loader: ({params})=> getRoom(params.id)
            }
        ],
    },
    {
        path: '/login', 
        element: <Login/>
    },
    {
        path: '/signup', 
        element: <SignUp/>
    },
    {
        path:'/dashboard',
        element: <DashboardLayout/>,
        // children: [
        //     {
        //         path: '/dashboard',
            
        //     }
        // ],
    }
]);
