import { Navigate, useRoutes, useSearchParams } from 'react-router-dom';
import App from './App';
import Home from './layouts/Home'
import SignIn from './page/SignIn';

export default function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <SignIn />
                }
            ]
        }
    ])
}
