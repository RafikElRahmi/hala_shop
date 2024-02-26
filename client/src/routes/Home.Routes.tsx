import { Suspense, lazy } from "react";
import Spinner from "../components/Layouts/load-spiner/Spinner";
import Routes from "../Constants/Routes";
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default {
    path: Routes.home,
    errorElement: (
        <Suspense fallback={<Spinner />}>
            <NotFound />
        </Suspense>
    ),
    element: (
        <Suspense fallback={<Spinner />}>
            <Home />
        </Suspense>
    ),
} as const;
