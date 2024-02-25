import { Suspense, lazy } from "react";
import Routes from "../Constants/Routes";
const Register = lazy(() => import("../pages/Register"));
const Spinner = lazy(() => import("../components/Layouts/load-spiner/Spinner"));

export default {
    path: Routes.register,
    element: (
        <Suspense fallback={<Spinner />}>
            <Register />
        </Suspense>
    ),
} as const;
