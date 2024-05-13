import { Routes, Route } from "react-router-dom";
//import { Body } from "./components/Body/Body";
import { ROUTERS } from "./utils/router";
import App from "./App";
import Profile from "./Profile";
const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: App
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <Profile />
        }
    ]
    return (
        <Routes>
            {
                userRouters.map((item, key) =>
                    <Route key={key} path={item.path} element={item.component} />
                )
            }
        </Routes>
    )
}
const RouterCustom = () => {
    return renderUserRouter();
}
export default RouterCustom;
