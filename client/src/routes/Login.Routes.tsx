import { Suspense, lazy } from "react";
import Routes from "../Constants/Routes";
const Login = lazy(() => import("../pages/Login"));
import Spinner from "../components/Layouts/load-spiner/Spinner";


export default {
    path: Routes.login,
    element: (
        <Suspense fallback={<Spinner />}>
            <Login />
        </Suspense>
    ),
} as const;
