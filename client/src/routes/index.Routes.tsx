import { createBrowserRouter } from "react-router-dom";
import HomeRoutes from "./Home.Routes";
import LoginRoutes from "./Login.Routes";
import RegisterRoutes from "./Register.Routes";
import ProfileRoutes from "./Profile.Routes";
import Layout from './../components/Layouts/Layout';
const routes = [
    {
        path: '/',
        element: <Layout /> ,
        children : [ HomeRoutes, LoginRoutes, RegisterRoutes, ProfileRoutes]}
];
const router = createBrowserRouter(routes);
export default router;
