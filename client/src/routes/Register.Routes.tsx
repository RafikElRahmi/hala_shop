import { Suspense, lazy } from "react";
import Routes from "../Constants/Routes";
const Register = lazy(() => import("../pages/Register"));
import Spinner from "../components/Layouts/load-spiner/Spinner";

export default {
    path: Routes.register,
    element: (
        <Suspense fallback={<Spinner />}>
            <Register />
        </Suspense>
    ),
} as const;
