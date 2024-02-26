import { Suspense, lazy } from "react";
import Routes from "../Constants/Routes";
const Profile = lazy(() => import("../pages/Profile"));
import Spinner from "../components/Layouts/load-spiner/Spinner";


export default {
    path: Routes.profile.base,
    element: (
        <Suspense fallback={<Spinner />}>
            <Profile />
        </Suspense>
    ),
} as const;
