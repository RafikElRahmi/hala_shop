import { createBrowserRouter } from "react-router-dom";
import HomeRoutes from "./Home.Routes";
import LoginRoutes from "./Login.Routes";
import RegisterRoutes from "./Register.Routes";
import Layout from "../components/Layouts/Layout";
import ProfileRoutes from "./Profile.Routes";
const routes = [
    {
        element: <Layout />,
        children: [HomeRoutes, LoginRoutes, RegisterRoutes, ProfileRoutes],
    },
];
const router = createBrowserRouter(routes);
export default router;
