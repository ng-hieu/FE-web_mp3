import { Navigate, useRoutes, useSearchParams } from 'react-router-dom';
import App from './App';

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <App />
                }
            ]
        }
    ])
}
